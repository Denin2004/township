<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

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
}
