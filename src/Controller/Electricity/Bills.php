<?php

namespace App\Controller\Electricity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\Electricity\Bills as BillsForm;
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
            $data['month'] = $dt->format('n');
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
        $form = $this->createForm(UploadForm::class);
        $form->handleRequest($request);
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
        return new JsonResponse([
            'success' => true,
        ]);
    }
}
