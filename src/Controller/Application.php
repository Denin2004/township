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
            'user' => [
                'name' => $this->getUser()->getUsername(),
                'id' => $this->getUser()->getId(),
                'line_manager' => $this->getUser()->get('line'),
                'widgets' => $this->getUser()->get('widgets'),
                'security' => $this->getUser()->get('security')
            ]
        ];
        return new JsonResponse($res);
    }
}
