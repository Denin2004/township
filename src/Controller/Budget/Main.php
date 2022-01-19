<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Budget;
use App\Services\SiteConfig\SiteConfig;
use App\Form\Budget\Charge;

class Main extends AbstractController
{
    public function widget(Budget $budgetDB, SiteConfig $siteConfig)
    {
        return new JsonResponse([
            'success' => true,
            'info' => $budgetDB->widget($siteConfig->get('php_date_format'))
        ]);
    }

    public function list(Budget $budgetDB)
    {
        return new JsonResponse([
            'success' => true,
            'list' => $budgetDB->list()
        ]);
    }

    public function data(Budget $budgetDB, $budget_id)
    {
        return new JsonResponse([
            'success' => true,
            'budget' => $budgetDB->budget($budget_id)
        ]);
    }

    public function chargeForm()
    {
        $form = $this->createForm(Charge::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function charge(Request $request, Budget $budgetDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Charge::class, [], ['request' => true]);
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
        $formData = $form->getData();
        $budgetDB->charge($formData);
        if ($budgetDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $budgetDB->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true
        ]);
    }
}
