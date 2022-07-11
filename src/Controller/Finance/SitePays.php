<?php

namespace App\Controller\Finance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\MoneyMove as MoneyMoveDB;
use App\Form\MoneyMove\SitePays as SitePaysForm;
use App\Services\SiteConfig\SiteConfig;

class SitePays extends AbstractController
{
    public function data(Request $request, MoneyMoveDB $moneyMoveDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(SitePaysForm::class, [], ['request' => true]);
        $form->submit($formRequest);
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
        return new JsonResponse([
            'success' => true,
            'sitePays' => $moneyMoveDB->sitePays($form->getData())
        ]);
    }

    public function getForm(SiteConfig $config)
    {
        $dtFrom = new \DateTime();
        $dtFrom->sub(new \DateInterval('P1M'));
        $dtTo = new \DateTime();
        $form = $this->createForm(
            SitePaysForm::class,
            [
                'date_range' => [
                    $dtFrom->format($config->get('php_date_format')),
                    $dtTo->format($config->get('php_date_format'))
                ]
            ]
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }
}
