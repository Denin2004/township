<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Land as LandDB;
use App\Entity\Charges as ChargesDB;
use App\Form\Land\Edit;
use App\Form\Land\Debt;
use App\Form\Land\MoneyMove;
use App\Services\SiteConfig\SiteConfig;

class Main extends AbstractController
{
    public function debtType(LandDB $landDB, $land_id, $type_id)
    {
        $debt = $landDB->debtByType([
            'land_id' => $land_id,
            'type_id' => $type_id
        ]);
        if (!$debt) {
            return new JsonResponse([
                'success' => false,
                'error' => 'security.error.403'
            ]);
        }

        return new JsonResponse([
            'success' => true,
            'debt' => $debt
        ]);
    }

    public function debtInvoiceChoices(LandDB $landDB, $land_id, $charge_type_id)
    {
        return new JsonResponse([
            'success' => true,
            'choices' => $landDB->debtInvoiceChoices([
                'land_id' => $land_id,
                'charge_type_id' => $charge_type_id
            ])
        ]);
    }

    public function pageData(LandDB $landDB)
    {
        $form = $this->createForm(Edit::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'lands' => $landDB->lands(),
            'form' => $view->vars['react']
        ]);
    }

    public function post(Request $request, LandDB $landDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Edit::class, [], ['request' => true]);
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
        $res = $landDB->post($formData);
        if ($landDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $landDB->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true
        ]);
    }

    public function debtForm()
    {
        $form = $this->createForm(Debt::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function debt(Request $request, LandDB $landDB, ChargesDB $chargesDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Debt::class, [], ['request' => true]);
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
            'debt' => $landDB->debt($form->getData()),
            'charges' => $chargesDB->list(),
            'prePays' => $landDB->prePays($form->getData())
        ]);
    }

    public function chargesByType($land_id, $type_id, $year, LandDB $landDB)
    {
        $www = $landDB->chargesByType([
                'land_id' => $land_id,
                'type_id' => $type_id,
                'year' => $year == -1 ? date('Y') : $year
            ]);
        return new JsonResponse([
            'success' => true,
            'charges' => $landDB->chargesByType([
                'land_id' => $land_id,
                'type_id' => $type_id,
                'year' => $year == -1 ? date('Y') : $year
            ])
        ]);
    }
    
    public function prePayType(LandDB $landDB, $land_id, $type_id)
    {
        $prePays = $landDB->prePayByType([
            'land_id' => $land_id,
            'type_id' => $type_id
        ]);
        if (!$prePays) {
            return new JsonResponse([
                'success' => false,
                'error' => 'security.error.403'
            ]);
        }

        return new JsonResponse([
            'success' => true,
            'prePays' => $prePays
        ]);
    }
    
    public function moneyMoveForm(SiteConfig $config, $land_id)
    {
        $dtFrom = new \DateTime();
        $dtFrom->setDate($dtFrom->format('Y'), 1, 1);
        $dtTo = new \DateTime();
        $form = $this->createForm(
            MoneyMove::class,
            [
                'date_range' => [
                    $dtFrom->format($config->get('php_date_format')),
                    $dtTo->format($config->get('php_date_format'))
                ],
                'land_id' => $land_id
            ]
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function moneyMoveData(Request $request, LandDB $landDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(MoneyMove::class, [], ['request' => true]);
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
            'moneyMove' => $landDB->moneyMove($form->getData())
        ]);
    }
}
