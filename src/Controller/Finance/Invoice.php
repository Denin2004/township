<?php

namespace App\Controller\Finance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

use App\Entity\Invoice as InvoiceDB;

class Invoice extends AbstractController
{
    public function data(InvoiceDB $invoiceDB, $id)
    {
        $invoice = $invoiceDB->data(['id' => $id]);
        if ($invoiceDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $invoiceDB->getError()
            ]);
        }
        if (!$invoice) {
            return new JsonResponse([
                'success' => fasle,
                'error' => 'finance.invoice.errors.no_found'
            ]);
        }
        return new JsonResponse([
            'success' => true,
            'invoice' => $invoice
        ]);
    }
    
    public function pdf($invoice_id, KernelInterface $kernel, InvoiceDB $invoiceDB)
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
            $response->headers->set('Content-Disposition', 'attachment;filename="blank.pdf"');
            $response->headers->set('Cache-Control', 'private');
            return $response;
        }
        switch ($invoice['chargeType']) {
            case 1:
                return $this->electricity($invoice, $kernel);
            case 2:
            case 3:
                return $this->budget($invoice, $kernel);
            default:
                $spreadsheet = new Spreadsheet();
                $sheet = $spreadsheet->getActiveSheet();
                $sheet->setCellValue('A1', 'Неизвестный тип документа');
                $writer = IOFactory::createWriter($spreadsheet, 'Mpdf');
                $response =  new StreamedResponse(
                    function () use ($writer) {
                        $writer->save('php://output');
                    }
                );
                $response->headers->set('Content-Type', 'application/pdf');
                $response->headers->set('Content-Disposition', 'attachment;filename="blank.pdf"');
                $response->headers->set('Cache-Control', 'private');
                return $response;
        }
    }
    
    private function budget($invoice, $kernel)
    {
        $loc = new FileLocator([$kernel->getProjectDir()]);
        $reader = IOFactory::createReader("Xlsx");
        $reader->setReadDataOnly(false);
        $blank = $reader->load($loc->locate('templates/blanks/budget.xlsx'));
        $blank->setActiveSheetIndex(0);
        $sheet = $blank->getActiveSheet();
        
        $dt = new \DateTime;
        $dt->setDate($invoice['year'], $invoice['month'], 1);
        
        $sheet->setCellValue('A4', $invoice['owner'].', участок '.$invoice['land'].', '.$invoice['line'].' линия');
        $sheet->setCellValue('A5', $invoice['budgetName'].' '.$dt->format('M Y'));
        $sheet->setCellValue('B5', 'Площадь участка '.$invoice['square'].' соток');
        $sheet->setCellValue('C9', $invoice['amount']);
        
        
        $rowIndex = 8;
        $sheet->insertNewRowBefore(9, count($invoice['specs'])-1);
        foreach ($invoice['specs'] as $row) {
            $sheet->setCellValue('A'.$rowIndex, $row['itemName']);
            $sheet->setCellValue('B'.$rowIndex, $row['tax']);
            $sheet->setCellValue('C'.$rowIndex, $row['tax']*$row['square']);
            $rowIndex++;
        }
      
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
    
    private function electricity($invoice, $kernel)
    {
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
