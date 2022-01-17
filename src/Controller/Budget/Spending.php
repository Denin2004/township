<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Budget as BudgetDB;
use App\Form\Budget\SpendingCreate;

class Spending extends AbstractController
{
    public function createF(BudgetDB $budgetDB)
    {
        $form = $this->createForm(SpendingCreate::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function post(Request $request, BudgetDB $budgetDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(SpendingCreate::class, [], ['request' => true]);
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
        $formData['id'] = -1;
        $res = $budgetDB->spendingPost($formData);
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

    public function delete($land_id, $item_name_id, BudgetDB $budgetDB)
    {
        $budgetDB->discountDelete([
            'land_id' => $land_id,
            'item_name_id' => $item_name_id
        ]);
        return new JsonResponse([
            'success' => true
        ]);
    }
}
