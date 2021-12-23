<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Budget as BudgetDB;
use App\Form\Budget\Discount as DiscountForm;

class Discount extends AbstractController
{
    public function data(BudgetDB $budgetDB)
    {
        return new JsonResponse([
            'success' => true,
            'discounts' => $budgetDB->discounts()
        ]);
    }

    public function form($land_id, $item_name_id, BudgetDB $budgetDB)
    {
        $data = [
            'land_id' => $land_id,
            'item_name_id' => $item_name_id
        ];
        if ($land_id != -1) {
            $data = $budgetDB->discount($data);
            if (!$data) {
                return new JsonResponse([
                    'success' => false,
                    'error' => 'budget.errors.discount_not_found'
                ]);

            }
        }
        $form = $this->createForm(
            DiscountForm::class,
            $data
        );
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
        $form = $this->createForm(DiscountForm::class, [], ['request' => true]);
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
        $res = $budgetDB->discountPost($formData);
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
