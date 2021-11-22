<?php

namespace App\Controller\AccountManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\UACEntity;
use App\Form\Account;

class Main extends AbstractController
{
    public function count(UACEntity $uacDB)
    {
        return new JsonResponse([
            'success' => true,
            'count' => $uacDB->usersCount()
        ]);
    }

    public function accounts(UACEntity $uacDB)
    {
        return new JsonResponse([
            'success' => true,
            'accounts' => $uacDB->accounts()
        ]);
    }

    public function edit(UACEntity $uacDB, $id)
    {
        $account = $uacDB->account($id);
        $form = $this->createForm(Account::class, $account);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function post(Request $request)
    {
        $formData = json_decode($request->getContent(), true);
        if ($formData == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Account::class);
        $form->submit($formData);
        if (!$form->isValid()) {
            $error = '';
            foreach ($form->getErrors(true) as $error) {
                $error.= $error->getMessage().' ';
            }
            return new JsonResponse([
                'success' => false,
                'error' => $error
            ]);

        }
        $formData = $form->getData();
        dump($formData);
        $formData['land_ids'][] = 100;
        $res = [
            'success' => true,
            'account' => $formData
        ];
        return new JsonResponse($res);
    }
}
