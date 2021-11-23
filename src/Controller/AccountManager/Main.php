<?php

namespace App\Controller\AccountManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Entity\UACEntity;
use App\Form\Account;
use App\Form\SetPassword;

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

    public function accountForm(UACEntity $uacDB, $id)
    {
        $account = $uacDB->accounts($id);
        if (count($account) == 0) {
            return new JsonResponse([
                'success' => false,
                'error' => 'account.errors.no_such_user'
            ]);
        }
        $form = $this->createForm(Account::class, $account[0]);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function accountPost(Request $request, UACEntity $uacDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Account::class, [], ['request' => true]);
        $form->submit($formRequest);
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
        $uacDB->accountPost($formData);
        $account = $uacDB->accounts($formData['id']);
        if (count($account) == 0) {
            return new JsonResponse([
                'success' => false,
                'error' => 'account.errors.no_such_user'
            ]);
        }
        $res = [
            'success' => true,
            'account' => $account[0]
        ];
        return new JsonResponse($res);
    }

    public function passwordForm($id)
    {
        $form = $this->createForm(SetPassword::class, ['id' => $id]);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function passwordSet(Request $request, UACEntity $uacDB, UserPasswordEncoderInterface $encoder)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(SetPassword::class);
        $form->submit($formRequest);
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
        $formData['password'] = $encoder->encodePassword($this->getUser(), $formData['password']);
        $uacDB->setPassword($formData);
        $res = [
            'success' => true
        ];
        return new JsonResponse($res);
    }
}
