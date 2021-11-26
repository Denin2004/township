<?php

namespace App\Controller\Electricity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\Electricity\Upload as UploadForm;
use App\Entity\Charges;

class Upload extends AbstractController
{
    const BLANK_HEIGHT = 26;
    const BLANK_START = 2;

    private $sheet;
    private $lastError;

    public function form()
    {
        $dt = new \DateTime();
        $form = $this->createForm(
            UploadForm::class,
            [
                'year' => $dt->format('Y'),
                'month' => $dt->format('n')
            ]
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function upload(Request $request, Charges $charges)
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
        $billIndex = 0;
        $this->sheet = $spreadsheet->getActiveSheet();
        $billNum = 'start';
        while ($billNum != null) {
            $billNum = $this->sheet->getCell('F'.(self::BLANK_START+self::BLANK_HEIGHT*$billIndex))->getValue();
            if ($billNum != null) {
                $queryData = [
                    'billNum' => $billNum,
                    'month' => 0,
                    'year' => 0,
                    'land_id' => 0,
                    'dayStart' => 0,
                    'dayEnd' => 0,
                    'dayRate' => 0,
                    'dayAmount' => 0,
                    'nightStart' => 0,
                    'nightEnd' => 0,
                    'nightRate' => 0,
                    'nightAmount' => 0,

                ];
                $queryData['dayAmount'] = $this->getFloat([
                    'cell' => 'G'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                    'allowNull' => true
                ]);
                if ($this->lastError != '') {
                    return new JsonResponse([
                        'success' => false,
                        'error' => 'electricity.errors.amount',
                        'errorData' => $this->lastError
                    ]);
                }
                $queryData['nightAmount'] = $this->getFloat([
                    'cell' => 'G'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                    'allowNull' => true
                ]);
                if ($this->lastError != '') {
                    return new JsonResponse([
                        'success' => false,
                        'error' => 'electricity.errors.amount',
                        'errorData' => $this->lastError
                    ]);
                }
                if (($queryData['dayAmount'] != 0)or($queryData['nightAmount'])) {
                    $words = explode(' ', $billNum);
                    $dt = \DateTime::createFromFormat('d.m.Y', $words[4]);
                    if (!$dt) {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.date',
                            'errorData' => 'F'.(self::BLANK_START+self::BLANK_HEIGHT*$billIndex).' '.$billNum
                        ]);
                    }
                    $queryData['month'] = intval($dt->format('m'));
                    $queryData['year'] = intval($dt->format('Y'))   ;
                    $words = explode('.', $this->sheet->getCell('A'.(self::BLANK_START+3+self::BLANK_HEIGHT*$billIndex))->getValue());
                    if (!isset($words[2])or(intval($words[2]) == 0)) {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.land',
                            'errorData' => 'A'.(self::BLANK_START+3+self::BLANK_HEIGHT*$billIndex).' '.$billNum
                        ]);
                    }
                    $queryData['land_id'] = intval($words[2]);
                    $queryData['dayStart'] = $this->getFloat([
                        'cell' => 'C'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $queryData['dayEnd'] = $this->getFloat([
                        'cell' => 'D'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $queryData['dayRate'] = $this->getFloat([
                        'cell' => 'F'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => false
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $queryData['nightStart'] = $this->getFloat([
                        'cell' => 'C'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $queryData['nightEnd'] = $this->getFloat([
                        'cell' => 'D'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $queryData['nightRate'] = $this->getFloat([
                        'cell' => 'F'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => false
                    ]);
                    if ($this->lastError != '') {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $this->lastError
                        ]);
                    }
                    $charges->addElectricityBill($queryData);
                    if ($charges->isError()) {
                        return new JsonResponse([
                            'success' => false,
                            'error' => 'electricity.errors.amount',
                            'errorData' => $charges->getError()
                        ]);
                    }
                }
                $billIndex++;
            }
        }
        if ($billNum != 'start') {
            $res = $charges->electricityBillsSum([
                'year' => $queryData['year'],
                'month' => $queryData['month']
            ]);
            dump($res);
            return new JsonResponse([
                'success' => true,
                'result' => [
                    'year' => $queryData['year'],
                    'month' => $queryData['month'],
                    'sum' => $res[0]['sum']
                ]
            ]);
        }
        return new JsonResponse([
            'success' => true,
        ]);
    }

    private function getFloat($data)
    {
        $this->lastError = '';
        $value = $this->sheet->getCell($data['cell'])->getValue();
        if ($value == null) {
            if ($data['allowNull']) {
                return 0;
            }
            $this->lastError = $data['cell'].'null';
            return false;
        }
        if (!is_numeric($value)) {
            $this->lastError = $data['cell'].' '.$value;
            return false;
        }
        return floatval($value);
    }
}
