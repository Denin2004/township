<?php

namespace App\Controller\Electricity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;

use App\Form\Electricity\Bills as BillsForm;
use App\Form\Electricity\AddBill;
use App\Entity\Charges;

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
    
    public function excelInvoice($invoice_id, KernelInterface $kernel)
    {
        $loc = new FileLocator([$kernel->getProjectDir()]);
        $reader = IOFactory::createReader("Xlsx");
        $reader->setReadDataOnly(false);
        $blank = $reader->load($loc->locate('templates/blanks/electricity.xlsx'));
        $blank->setActiveSheetIndex(0);
        $sheet = $blank->getActiveSheet();
        $sheet->setCellValue('C1', 'qqqqqq');
        
        $writer = IOFactory::createWriter($blank, 'Xlsx');
        $response =  new StreamedResponse(
            function () use ($writer) {
                $writer->save('php://output');
            }
        );
        $response->headers->set('Content-Type', 'application/vnd.ms-excel');
        $response->headers->set('Content-Disposition', 'attachment;filename="ExportScan.xlsx"');
        $response->headers->set('Cache-Control', 'max-age=0');
        return $response;
    }
}
