<?php

namespace App\Controller\Electricity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

use App\Form\Electricity\Bills as BillsForm;
use App\Form\Electricity\AddBill;
use App\Entity\Charges;
use App\Entity\Invoice as InvoiceDB;

class Bills extends AbstractController
{
    public function form($year, $month)
    {
        $data = [
            'year' => $year,
            'month' => $month
        ];
        if ($year == 0) {
            $dt = new \DateTime();
            $data['year'] = $dt->format('Y');
            $data['month'] = $month == 0 ? $dt->format('n') : $month;
        }
        $form = $this->createForm(
            BillsForm::class,
            $data
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function data(Request $request, Charges $charges)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(BillsForm::class);
        $form->submit($formRequest);
        if (!$form->isValid()) {
            $errors = '';
            foreach ($form->getErrors(true) as $error) {
                $errors.= $error->getMessage().' ';
            }
            return new JsonResponse([
                'success' => false,
                'error' => $errors
            ]);
        }
        return new JsonResponse([
            'success' => true,
            'bills' => $charges->monthBills($form->getData())
        ]);
    }

    public function addForm()
    {
        $form = $this->createForm(AddBill::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function add(Request $request, Charges $charges)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(AddBill::class);
        $form->submit($formRequest);
        if (!$form->isValid()) {
            $errors = '';
            foreach ($form->getErrors(true) as $error) {
                $errors.= $error->getMessage().' ';
            }
            return new JsonResponse([
                'success' => false,
                'error' => $errors
            ]);
        }
        $charges->addElectricityBill($form->getData());
        if ($charges->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $charges->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true
        ]);
    }
    
    public function pdfInvoice($invoice_id, KernelInterface $kernel, InvoiceDB $invoiceDB)
    {
        $invoice = $invoiceDB->data(['id' => $invoice_id]);
        if (!$invoice) {
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setCellValue('A1', 'Документ не найден');
            $writer = IOFactory::createWriter($spreadsheet, 'Mpdf');
            $response =  new StreamedResponse(
                function () use ($writer) {
                    $writer->save('php://output');
                }
            );
            $response->headers->set('Content-Type', 'application/pdf');
            $response->headers->set('Content-Disposition', 'attachment;filename="electricity.pdf"');
            $response->headers->set('Cache-Control', 'private');
            return $response;
        }

        $loc = new FileLocator([$kernel->getProjectDir()]);
        $reader = IOFactory::createReader("Xlsx");
        $reader->setReadDataOnly(false);
        $blank = $reader->load($loc->locate('templates/blanks/electricity.xlsx'));
        $blank->setActiveSheetIndex(0);
        $sheet = $blank->getActiveSheet();
        
        $sheet->setCellValue('F2', $invoice['invoiceNum']);
        $sheet->setCellValue('F15', $invoice['invoiceNum']);
        
        $sheet->setCellValue('C9', $invoice['dayStart']);
        $sheet->setCellValue('C22', $invoice['dayStart']);
        
        $sheet->setCellValue('D9', $invoice['dayEnd']);
        $sheet->setCellValue('D22', $invoice['dayEnd']);
        
        $sheet->setCellValue('E9', $invoice['dayEnd']-$invoice['dayStart']);
        $sheet->setCellValue('E22', $invoice['dayEnd']-$invoice['dayStart']);

        $sheet->setCellValue('F9', $invoice['dayRate']);
        $sheet->setCellValue('F22', $invoice['dayRate']);
        
        $sheet->setCellValue('G9', $invoice['day']);
        $sheet->setCellValue('G22', $invoice['day']);
        
        $sheet->setCellValue('C10', $invoice['nightStart']);
        $sheet->setCellValue('C23', $invoice['nightStart']);
        
        $sheet->setCellValue('D10', $invoice['nightEnd']);
        $sheet->setCellValue('D23', $invoice['nightEnd']);
        
        $sheet->setCellValue('E10', $invoice['nightEnd']-$invoice['nightStart']);
        $sheet->setCellValue('E23', $invoice['nightEnd']-$invoice['nightStart']);

        $sheet->setCellValue('F10', $invoice['nightRate']);
        $sheet->setCellValue('F23', $invoice['nightRate']);
        
        $sheet->setCellValue('G10', $invoice['night']);
        $sheet->setCellValue('G23', $invoice['night']);
        
        $sheet->setCellValue('F12', $sheet->getCell('F12')->getValue().($invoice['night']+$invoice['day']).' Руб.');
        $sheet->setCellValue('F25', $sheet->getCell('F25')->getValue().($invoice['night']+$invoice['day']).' Руб.');
        
        $dt = new \DateTime();
        $dt->setDate($invoice['year'], $invoice['month'], 1);
        
        $sheet->setCellValue('C8', $sheet->getCell('C8')->getValue().' '.$dt->format('d.m.Y').' 00:00 кВт.ч');
        $sheet->setCellValue('C21', $sheet->getCell('C21')->getValue().' '.$dt->format('d.m.Y').' 00:00 кВт.ч');
        
        $dt->add(new \DateInterval('P1M'));

        $sheet->setCellValue('D8', $sheet->getCell('D8')->getValue().' '.$dt->format('d.m.Y').' 00:00 кВт.ч');
        $sheet->setCellValue('D21', $sheet->getCell('D21')->getValue().' '.$dt->format('d.m.Y').' 00:00 кВт.ч');

        $sheet->setCellValue('A6', $sheet->getCell('A6')->getValue().' '.$invoice['owner']);
        $sheet->setCellValue('A19', $sheet->getCell('A19')->getValue().' '.$invoice['owner']);

        $sheet->setCellValue('A5', $sheet->getCell('A5')->getValue().' '.$invoice['land']);
        $sheet->setCellValue('A18', $sheet->getCell('A18')->getValue().' '.$invoice['land']);
        
        $dt->add(new \DateInterval('P9D'));

        $sheet->setCellValue('F13', $sheet->getCell('F13')->getValue().' '.$dt->format('d.m.Y'));
        $sheet->setCellValue('F26', $sheet->getCell('F26')->getValue().' '.$dt->format('d.m.Y'));
        
        $writer = IOFactory::createWriter($blank, 'Mpdf');
        $response =  new StreamedResponse(
            function () use ($writer) {
                $writer->save('php://output');
            }
        );
        $response->headers->set('Content-Type', 'application/pdf');
        $response->headers->set('Content-Disposition', 'attachment;filename="electricity_'.$invoice['month'].'_'.$invoice['year'].'.pdf"');
        $response->headers->set('Cache-Control', 'private');
        return $response;
    }
}
