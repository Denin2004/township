<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Budget;
use App\Form\Budget\ItemEdit;

class Item extends AbstractController
{
    public function form(Budget $budgetDB, $id)
    {
        $data = $budgetDB->item($id);
        if (count($data) == 0) {
            return new JsonResponse([
                'success' => false,
                'error' => 'budget.errors.no_such_item'
            ]);
        }
        $form = $this->createForm(ItemEdit::class, $data[0]);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react'],
            'byMonth' => $data[0]['by_month']
        ]);
    }

    public function post(Request $request, Budget $budgetDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(ItemEdit::class, [], ['request' => true]);
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
        $budgetDB->itemPost($formData);
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

    public function nameAdd(Budget $budgetDB, $name)
    {
        $added = $budgetDB->addItemName($name);
        if ($budgetDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $budgetDB->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true,
            'added' => [
                'label' => $name,
                'value' => $added['id']
            ]
        ]);
    }
}
