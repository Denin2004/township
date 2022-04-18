<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Land as LandDB;
use App\Form\Land\Edit;

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
}
