<?php

namespace App\Controller\Electricity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\Electricity\Bills as BillsForm;
use App\Form\Electricity\AddBill;
use App\Entity\Charges;

class Bills extends AbstractController
{
    public function form($year, $month)
    {
        $data = [
            'year' => $year,
            'month' => $month
        ];
        if ($year == 0) {
            $dt = new \DateTime();
            $data['year'] = $dt->format('Y');
            $data['month'] = $month == 0 ? $dt->format('n') : $month;
        }
        $form = $this->createForm(
            BillsForm::class,
            $data
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function data(Request $request, Charges $charges)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(BillsForm::class);
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
            'bills' => $charges->monthBills($form->getData())
        ]);
    }

    public function addForm()
    {
        $form = $this->createForm(AddBill::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function add(Request $request, Charges $charges)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(AddBill::class);
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
        $charges->addElectricityBill($form->getData());
        if ($charges->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $charges->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true
        ]);
    }
}
