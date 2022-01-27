<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\ExtData\Upload as UploadForm;
use App\Entity\ExtData;
use App\Services\SiteConfig\SiteConfig;

class Upload extends AbstractController
{
    private $sheet;

    public function form()
    {
        $form = $this->createForm(UploadForm::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function post(Request $request, ExtData $extDataDB, SiteConfig $siteConfig)
    {
        $form = $this->createForm(UploadForm::class);
        $form->handleRequest($request);
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
        $formData = $form->getData();
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($formData['file']->getRealPath());
        $rowIndex = 2;
        $this->sheet = $spreadsheet->getActiveSheet();
        $date = $this->sheet->getCell('A'.$rowIndex)->getValue();
        $errors = [];
        while ($date != null) {
            $dt = \DateTime::createFromFormat($siteConfig->get('php_date_format'), $date);
            if (!$dt) {
                $errors[] = [
                    'line' => $rowIndex,
                    'error' => 'extData.errors.wrong_date'
                ];
            }
            if (!$this->getFloat('B'.$rowIndex)) {
                $errors[] = [
                    'line' => $rowIndex,
                    'error' => 'extData.errors.wrong_amount'
                ];
            }
            $rowIndex++;
            $date = $this->sheet->getCell('A'.$rowIndex)->getValue();
        }
        if (count($errors) != 0) {
            return new JsonResponse([
                'success' => true,
                'errors' => $errors
            ]);
        }
        $rowIndex = 2;
        $date = $this->sheet->getCell('A'.$rowIndex)->getValue();
        $unknownsOld = $extDataDB->unknownsCount();
        while ($date != null) {
            $extDataDB->add([
                'unknown_id' => -1,
                'dt' => $this->sheet->getCell('A'.$rowIndex)->getValue(),
                'amount' => $this->sheet->getCell('B'.$rowIndex)->getValue(),
                'month' => $this->sheet->getCell('C'.$rowIndex)->getValue(),
                'year' => $this->sheet->getCell('D'.$rowIndex)->getValue(),
                'land' => $this->sheet->getCell('E'.$rowIndex)->getValue(),
                'type' => $this->sheet->getCell('F'.$rowIndex)->getValue(),
                'budget' => $this->sheet->getCell('G'.$rowIndex)->getValue(),
                'budget_item' => $this->sheet->getCell('H'.$rowIndex)->getValue()
            ]);
            if ($extDataDB->isError()) {
                $errors[] = [
                    'line' => $rowIndex,
                    'error' => $extDataDB->getError(),
                    'data' => [
                        'unknown_id' => -1,
                        'dt' => $this->sheet->getCell('A'.$rowIndex)->getValue(),
                        'amount' => $this->sheet->getCell('B'.$rowIndex)->getValue(),
                        'month' => $this->sheet->getCell('C'.$rowIndex)->getValue(),
                        'year' => $this->sheet->getCell('D'.$rowIndex)->getValue(),
                        'land' => $this->sheet->getCell('E'.$rowIndex)->getValue(),
                        'type' => $this->sheet->getCell('F'.$rowIndex)->getValue(),
                        'budget' => $this->sheet->getCell('G'.$rowIndex)->getValue(),
                        'budget_item' => $this->sheet->getCell('H'.$rowIndex)->getValue()
                    ]
                ];
            }
            $rowIndex++;
            $date = $this->sheet->getCell('A'.$rowIndex)->getValue();
        }
        $unknownsNew = $extDataDB->unknownsCount();
        return new JsonResponse([
            'success' => true,
            'result' => [
               'errors' => $errors,
               'unknowns' => $unknownsNew-$unknownsOld
            ]
        ]);
    }

    private function getFloat($cell)
    {
        $this->lastError = '';
        $value = $this->sheet->getCell($cell)->getValue();
        if (!is_numeric($value)) {
            return false;
        }
        return floatval($value);
    }
}
