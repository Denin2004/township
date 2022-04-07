<?php

namespace App\Controller\Finance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\MoneyMove as MoneyMoveDB;
use App\Form\MoneyMove\Filter;
use App\Services\SiteConfig\SiteConfig;

class MoneyMove extends AbstractController
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
        $form = $this->createForm(Filter::class, [], ['request' => true]);
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
            'moneyMove' => $moneyMoveDB->data($form->getData())
        ]);
    }

    public function filterForm(SiteConfig $config)
    {
        $dtFrom = new \DateTime();
        $dtFrom->setDate($dtFrom->format('Y'), 1, 1);
        $dtTo = new \DateTime();
        $form = $this->createForm(
            Filter::class,
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
