<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Mobile_Detect;

use App\Services\SiteConfig\SiteConfig;

class MainPage extends AbstractController
{
    const BLANK_HEIGHT = 26;
    const BLANK_START = 2;

    private $sheet;
    private $lastError;

    /**
     * @Route("/admin/{reactRouting}", name="default", defaults={"reactRouting": null})
     */
    public function index(SiteConfig $config)
    {
        $detect = new Mobile_Detect;
        $mode = $detect->isMobile() ? 'mobile' : 'web';
        $this->readExcel();
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral')
            ]
        );
    }

    private function readExcel()
    {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load('/var/www/html/township/templates/billing.xlsx');
        $billIndex = 0;
        $this->sheet = $spreadsheet->getActiveSheet();
        $billNum = 'start';
        while ($billNum != null) {
            $billNum = $this->sheet->getCell('F'.(self::BLANK_START+self::BLANK_HEIGHT*$billIndex))->getValue();
            if ($billNum != null) {
                $queryData = [
                    'dayAmount' => 0,
                    'nightAmount' => 0,
                    'month' => 0,
                    'year' => 0,
                    'land_id' => 0,
                    'dayStart' => 0,
                    'dayEnd' => 0,
                    'nightStart' => 0,
                    'nightEnd' => 0,
                    'dayRate' => 0,
                    'nightRate' => 0

                ];
                $queryData['dayAmount'] = $this->getFloat([
                    'cell' => 'G'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                    'allowNull' => true,
                    'error' => 'error.amount'
                ]);
                if ($this->lastError != '') {
                    break;
                }
                $queryData['nightAmount'] = $this->getFloat([
                    'cell' => 'G'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                    'allowNull' => true,
                    'error' => 'error.amount'
                ]);
                if ($this->lastError != '') {
                    break;
                }
                if (($queryData['dayAmount'] != 0)or($queryData['nightAmount'])) {
                    $words = explode(' ', $billNum);
                    $dt = \DateTime::createFromFormat('d.m.Y', $words[4]);
                    if (!$dt) {
                        $this->lastError = 'error.wrong_num '.'F'.(self::BLANK_START+self::BLANK_HEIGHT*$billIndex).' '.$billNum;
                        break;
                    }
                    $queryData['month'] = intval($dt->format('m'));
                    $queryData['year'] = intval($dt->format('Y'));
                    $words = explode('.', $this->sheet->getCell('A'.(self::BLANK_START+3+self::BLANK_HEIGHT*$billIndex))->getValue());
                    if (!isset($words[2])or(intval($words[2]) == 0)) {
                        $this->lastError = 'error.wrong_land '.'A'.(self::BLANK_START+3+self::BLANK_HEIGHT*$billIndex).' '.$billNum;
                        break;
                    }
                    $queryData['land_id'] = intval($words[2]);
                    $queryData['dayStart'] = $this->getFloat([
                        'cell' => 'C'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true,
                        'error' => 'error.amount'
                    ]);
                    if ($this->lastError != '') {
                        break;
                    }
                    $queryData['dayEnd'] = $this->getFloat([
                        'cell' => 'D'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true,
                        'error' => 'error.amount'
                    ]);
                    $queryData['dayRate'] = $this->getFloat([
                        'cell' => 'F'.(self::BLANK_START+7+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => false,
                        'error' => 'error.amount'
                    ]);
                    if ($this->lastError != '') {
                        break;
                    }
                    $queryData['nightStart'] = $this->getFloat([
                        'cell' => 'C'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true,
                        'error' => 'error.amount'
                    ]);
                    if ($this->lastError != '') {
                        break;
                    }
                    $queryData['nightEnd'] = $this->getFloat([
                        'cell' => 'D'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => true,
                        'error' => 'error.amount'
                    ]);
                    if ($this->lastError != '') {
                        break;
                    }
                    $queryData['nightRate'] = $this->getFloat([
                        'cell' => 'F'.(self::BLANK_START+8+self::BLANK_HEIGHT*$billIndex),
                        'allowNull' => false,
                        'error' => 'error.amount'
                    ]);
                    dump($queryData);
                }
                $billIndex++;
            }
        };
    }

    private function getFloat($data)
    {
        $this->lastError = '';
        $value = $this->sheet->getCell($data['cell'])->getValue();
        if ($value == null) {
            if ($data['allowNull']) {
                return 0;
            }
            $this->lastError = $data['error'].' '.$data['cell'].'null';
            return false;
        }
        if (!is_numeric($value)) {
            $this->lastError = $data['error'].' '.$data['cell'].' '.$value;
            return false;
        }
        return floatval($value);
    }
}
