<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
        //$mode = 'mobile';
        $mode = $detect->isMobile() ? 'mobile' : 'web';
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral'),
                'result' => null
            ]
        );
    }
}
