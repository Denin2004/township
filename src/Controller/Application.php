<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Mobile_Detect;

use App\Services\SiteConfig\SiteConfig;
use App\Entity\User;

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

    public function config(User $userDB)
    {
        $res = [
            'success' => true,
            'urls' => $this->renderView('urls.json.twig'),
            'user' => [
                'name' => $this->getUser()->getUsername(),
                'id' => $this->getUser()->getId(),
                'line_manager' => $this->getUser()->get('line'),
                'widgets' => $this->getUser()->get('widgets'),
                'security' => $this->getUser()->get('security'),
                'lands' => $userDB->lands()
            ]
        ];
        if ($res['user']['line_manager'] == null) {
            $lineWidget = array_search('line._', $res['user']['widgets']);
            if ($lineWidget !== false) {
                array_splice($res['user']['widgets'], $lineWidget, 1);
            }
        }
        return new JsonResponse($res);
    }
}
