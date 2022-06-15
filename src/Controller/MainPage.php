<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Mobile_Detect;

use App\Services\SiteConfig\SiteConfig;

class MainPage extends AbstractController
{
    /**
     * @Route("/admin/{reactRouting}", name="default", defaults={"reactRouting": null})
     */
    public function index(SiteConfig $config)
    {
        $detect = new Mobile_Detect;
        $mode = 'mobile';
        //$mode = $detect->isMobile() ? 'mobile' : 'web';
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral')
            ]
        );
    }
    
    public function sberTest()
    {
        $data = [
            'userName' => 't7802551492-api',
            'password' => 'o0BKfPxD',
            'orderNumber' => 'test111',
            'amount' => 100,
            'returnUrl' => 'http://dvorus.ru',
            'failUrl' => 'http://dvorus.ru'
        ];
        $data_string = json_encode($data);
        dump('https://3dsec.sberbank.ru/payment/rest/register.do?'. http_build_query($data));
        $ch = curl_init('https://3dsec.sberbank.ru/payment/rest/register.do?'. http_build_query($data));
        //$ch = curl_init('https://3dsec.sberbank.ru/payment/rest/register.do');
        //curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        /*        curl_setopt(
                    $ch,
                    CURLOPT_HTTPHEADER,
                    [
          //             'Content-Type: application/json',
                       'Content-Type: application/x-www-form-urlencoded',
                       'Content-Length: ' . strlen($data_string)
                    ]
                );*/
        
//        $7result = json_decode(curl_exec($ch), true);
        dump(curl_exec($ch));
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        dump(/*$result,*/ $httpcode);
        return new JsonResponse([]);
    }
}
