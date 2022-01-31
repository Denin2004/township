<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\ExtData\Edit as EditForm;
use App\Entity\ExtData;

class Page extends AbstractController
{
    public function form(ExtData $extDataDB, $id)
    {
        $data = $extDataDB->unknown(['id' => $id]);
        if (!$data) {
            return new JsonResponse([
                'success' => false,
                'error' => 'extData.errors.unknown'
            ]);
        }
        $form = $this->createForm(EditForm::class, $data);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function data(ExtData $extDataDB)
    {
        return new JsonResponse([
            'success' => true,
            'data' => $extDataDB->unknowns()
        ]);
    }

    public function post(Request $request, ExtData $extDataDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(EditForm::class, [], ['request' => true]);
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
        $res = $extDataDB->post($form->getData());
        if ($extDataDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $extDataDB->getError()
            ]);
        }
        return new JsonResponse([
            'success' => true
        ]);
    }
}
