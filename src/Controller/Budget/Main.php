<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Budget;
use App\Services\SiteConfig\SiteConfig;
use App\Form\Budget\View;

class Main extends AbstractController
{
    public function widget(Budget $budgetDB, SiteConfig $siteConfig)
    {
        return new JsonResponse([
            'success' => true,
            'info' => $budgetDB->widget($siteConfig->get('php_date_format'))
        ]);
    }

    public function form()
    {
        $form = $this->createForm(
            View::class
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function data(Request $request, Budget $budgetDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(View::class);
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
            'budget' => $budgetDB->budget($form->getData())
        ]);
    }
}
