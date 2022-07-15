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
        $rowIndex = 7;
        $this->sheet = $spreadsheet->getActiveSheet();
        $date = $this->sheet->getCell('B'.$rowIndex)->getValue();
        $errors = [];
        while ($date != null) {
            $dt = \DateTime::createFromFormat($siteConfig->get('php_date_format'), $date);
            if (!$dt) {
                $errors[] = [
                    'id' => count($errors),
                    'line' => $rowIndex,
                    'error' => 'extData.errors.wrong_date'
                ];
            }
            if (!$this->getFloat('M'.$rowIndex)) {
                $errors[] = [
                    'id' => count($errors),
                    'line' => $rowIndex,
                    'error' => 'extData.errors.wrong_amount'
                ];
            }
            $rowIndex++;
            $date = $this->sheet->getCell('B'.$rowIndex)->getValue();
        }
        if (count($errors) != 0) {
            return new JsonResponse([
                'success' => true,
                'result' => [
                   'sys_errors' => [],
                   'unknowns' => 0,
                   'errors' => $errors
                ]
            ]);
        }
        $rowIndex = 7;
        $date = $this->sheet->getCell('B'.$rowIndex)->getValue();
        $unknownsOld = $extDataDB->unknownsCount();
        $dt = \DateTime::createFromFormat($siteConfig->get('php_date_format'), $date);
        while ($dt != null) {
            $metaData = explode(' ', $this->sheet->getCell('R'.$rowIndex)->getValue());
            $type = isset($metaData[1]) && in_array(strtolower($metaData[1]), ['ц', 'э', 'ч']) ? strtolower($metaData[1]) : strtolower($metaData[0]);
            switch ($type) {
                case 'р':
                    $extDataDB->add([
                        'unknown_id' => -1,
                        'dt' => $date,
                        'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                        'month' => null,
                        'year' => null,
                        'land' => null,
                        'charge_code' => $metaData[0],
                        'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                    ]);
                    if ($extDataDB->isError()) {
                        $errors[] = [
                            'id' => count($errors),
                            'line' => $rowIndex,
                            'error' => $extDataDB->getError(),
                            'data' => [
                                'dt' => $date,
                                'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                'month' => null,
                                'year' => null,
                                'land' => null,
                                'charge_code' => $metaData[0],
                                'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                            ]
                        ];
                    }
                    break;
                case 'с':
                    break;
                case 'э':
                case 'ц':
                case 'ч':
                    if (!isset($metaData[2])) {
                        $errors[] = [
                            'id' => count($errors),
                            'line' => $rowIndex,
                            'error' => 'extData.errors._invalid_period',
                            'data' => [
                                'dt' => $date,
                                'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                'month' => null,
                                'year' => null,
                                'land' => null,
                                'charge_code' => $metaData[0],
                                'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                            ]
                        ];
                    } else {
                        $period = explode('-', $metaData[2]);
                        if (count($period) != 1) {
                            $dtMonth = explode('.', $period[0]);
                            $dtYear = count($dtMonth) != 1 ? $dtMonth : explode('.', $period[1]);
                        } else {
                            $dtMonth = explode('.', $period[0]);
                            $dtYear = $dtMonth;
                        }
                        $extDataDB->add([
                            'unknown_id' => -1,
                            'dt' => $date,
                            'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                            'month' => $dtMonth[0],
                            'year' => $dtYear[1]+2000,
                            'land' => ltrim($metaData[0], '0'),
                            'charge_code' => $metaData[1],
                            'budget_item' => null
                        ]);
                        if ($extDataDB->isError()) {
                            $errors[] = [
                                'id' => count($errors),
                                'line' => $rowIndex,
                                'error' => $extDataDB->getError(),
                                'data' => [
                                    'dt' => $date,
                                    'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                    'month' => $dtMonth[0],
                                    'year' => $dtYear[1]+2000,
                                    'land' => ltrim($metaData[0], '0'),
                                    'charge_code' => $metaData[1],
                                    'budget_item' => null
                                ]
                            ];
                        }
                    }
                    break;
                default:
                    $errors[] = [
                        'id' => count($errors),
                        'line' => $rowIndex,
                        'error' => $extDataDB->getError(),
                        'data' => [
                            'dt' => $date,
                            'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                            'month' => null,
                            'year' => null,
                            'land' => null,
                            'charge_code' => $this->sheet->getCell('R'.$rowIndex)->getValue(),
                            'budget_item' => null
                        ]
                    ];
            }
            /*

                        if (strtolower($metaData[0]) != 'р') {
                            if (!isset($metaData[2])) {
                                $errors[] = [
                                    'id' => count($errors),
                                    'line' => $rowIndex,
                                    'error' => 'extData.errors._invalid_period',
                                    'data' => [
                                        'dt' => $date,
                                        'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                        'month' => null,
                                        'year' => null,
                                        'land' => null,
                                        'charge_code' => $metaData[0],
                                        'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                                    ]
                                ];
                            } else {
                                $period = explode('-', $metaData[2]);
                                if (count($period) != 1) {
                                    $dtMonth = explode('.', $period[0]);
                                    $dtYear = count($dtMonth) != 1 ? $dtMonth : explode('.', $period[1]);
                                } else {
                                    $dtMonth = explode('.', $period[0]);
                                    $dtYear = $dtMonth;
                                }
                                $extDataDB->add([
                                    'unknown_id' => -1,
                                    'dt' => $date,
                                    'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                    'month' => $dtMonth[0],
                                    'year' => $dtYear[1]+2000,
                                    'land' => ltrim($metaData[0], '0'),
                                    'charge_code' => $metaData[1],
                                    'budget_item' => null
                                ]);
                                if ($extDataDB->isError()) {
                                    $errors[] = [
                                        'id' => count($errors),
                                        'line' => $rowIndex,
                                        'error' => $extDataDB->getError(),
                                        'data' => [
                                            'dt' => $date,
                                            'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                            'month' => $dtMonth[0],
                                            'year' => $dtYear[1]+2000,
                                            'land' => ltrim($metaData[0], '0'),
                                            'charge_code' => $metaData[1],
                                            'budget_item' => null
                                        ]
                                    ];
                                }
                            }
                        } else {
                            $extDataDB->add([
                                'unknown_id' => -1,
                                'dt' => $date,
                                'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                'month' => null,
                                'year' => null,
                                'land' => null,
                                'charge_code' => $metaData[0],
                                'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                            ]);
                            if ($extDataDB->isError()) {
                                $errors[] = [
                                    'id' => count($errors),
                                    'line' => $rowIndex,
                                    'error' => $extDataDB->getError(),
                                    'data' => [
                                        'dt' => $date,
                                        'amount' => $this->sheet->getCell('M'.$rowIndex)->getValue(),
                                        'month' => null,
                                        'year' => null,
                                        'land' => null,
                                        'charge_code' => $metaData[0],
                                        'budget_item' => isset($metaData[1]) ? $metaData[1] : -1
                                    ]
                                ];
                            }
                        }*/
            $rowIndex++;
            $date = $this->sheet->getCell('B'.$rowIndex)->getValue();
            $dt = \DateTime::createFromFormat($siteConfig->get('php_date_format'), $date);
        }
        $unknownsNew = $extDataDB->unknownsCount();
        return new JsonResponse([
            'success' => true,
            'result' => [
               'sys_errors' => $errors,
               'unknowns' => $unknownsNew-$unknownsOld,
               'errors' => []
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
