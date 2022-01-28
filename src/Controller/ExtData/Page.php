<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Form\ExtData\Upload as UploadForm;
use App\Entity\ExtData;

class Page extends AbstractController
{
    public function form()
    {
        $form = $this->createForm(UploadForm::class);
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
