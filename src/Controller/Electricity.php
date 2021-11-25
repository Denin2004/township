<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Form\Electricity\Upload;

class Electricity extends AbstractController
{
    public function form()
    {
        $form = $this->createForm(Upload::class);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function upload(Request $request)
    {
        $form = $this->createForm(Upload::class);
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
        dump($formData);
        $res = [
            'success' => true
        ];
        return new JsonResponse($res);
    }
}
