<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Mobile_Detect;

use App\Services\SiteConfig\SiteConfig;

class Application extends AbstractController
{
    /**
     * @Route("/admin/{reactRouting}", name="default", defaults={"reactRouting": null})
     */
    public function index(SiteConfig $config)
    {
        $detect = new Mobile_Detect;
        $mode = $detect->isMobile() ? 'mobile' : 'web';
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral')
            ]
        );
    }

    public function config()
    {
        $res = [
            'success' => true,
            'urls' => $this->renderView('urls.json.twig'),
            'widgets' => ['account.s', 'bookkeeping._', 'township._', 'line._'],
            'user' => [
                'name' => $this->getUser()->getUsername(),
                'id' => $this->getUser()->getId()
            ]
        ];
        return new JsonResponse($res);
    }
}
