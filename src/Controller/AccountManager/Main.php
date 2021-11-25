<?php

namespace App\Controller\AccountManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Entity\UACEntity;
use App\Form\AccountManager\Account;
use App\Form\AccountManager\SetPassword;
use App\Form\AccountManager\ChangePassword;

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
        $account = [
            [
                'id' => $id
            ]
        ];
        if ($id != -1) {
            $account = $uacDB->accounts($id);
            if (count($account) == 0) {
                return new JsonResponse([
                    'success' => false,
                    'error' => 'account.errors.no_such_user'
                ]);
            }
        }
        $form = $this->createForm(
            Account::class,
            $account[0],
            [
                'createAccount' => $id == -1
            ]
        );
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
        $form = $this->createForm(Account::class, [], ['request' => true, 'createAccount' => $formRequest['id'] == -1]);
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
        $res = $uacDB->accountPost($formData);
        if ($uacDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $uacDB->getError()
            ]);
        }
        $account = $uacDB->accounts($res[0]['user_post']);
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
        $formData['password'] = $encoder->encodePassword($this->getUser(), $formData['password']);
        $uacDB->setPassword($formData);
        if ($uacDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $uacDB->getError()
            ]);
        }
        $res = [
            'success' => true
        ];
        return new JsonResponse($res);
    }

    public function passwordChangeForm()
    {
        $form = $this->createForm(ChangePassword::class, ['id' => $this->getUser()->getId()]);
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function passwordChange(Request $request, UACEntity $uacDB, UserPasswordEncoderInterface $encoder)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(ChangePassword::class);
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
        if (!$encoder->isPasswordValid($this->getUser(), $formData['old_password'])) {
            return new JsonResponse([
                'success' => false,
                'error' => 'account.errors.old_password'
            ]);
        }
        $formData['password'] = $encoder->encodePassword($this->getUser(), $formData['new_password']);
        $uacDB->setPassword($formData);
        if ($uacDB->isError()) {
            return new JsonResponse([
                'success' => false,
                'error' => $uacDB->getError()
            ]);
        }
        $res = [
            'success' => true
        ];
        return new JsonResponse($res);
    }
}
