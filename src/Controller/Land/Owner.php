<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Land as LandDB;
use App\Form\Land\Owner as OwnerForm;

class Owner extends AbstractController
{
    public function data(LandDB $landDB)
    {
        return new JsonResponse([
            'success' => true,
            'owners' => $landDB->owners()
        ]);
    }

    public function form($id, LandDB $landDB)
    {
        $data = [
            'id' => $id,
            'land_id' => []
        ];
        if ($id != -1) {
            $data = $landDB->owner($id);
            if (!$data) {
                return new JsonResponse([
                    'success' => false,
                    'error' => 'land.errors.owner_not_found'
                ]);

            }
            $data['land_ids'] = explode(',', $data['lands']);
        }
        $form = $this->createForm(
            OwnerForm::class,
            $data
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
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
        $form = $this->createForm(OwnerForm::class, [], ['request' => true]);
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
        $res = $landDB->ownerPost($formData);
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

    public function delete($id, LandDB $landDB)
    {
        $landDB->ownerDelete($id);
        return new JsonResponse([
            'success' => true
        ]);
    }
}
