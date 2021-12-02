<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\User as UserDB;
use App\Form\User\MoneyMove;
use App\Services\SiteConfig\SiteConfig;

class User extends AbstractController
{
    public function debt(UserDB $userDB)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $userDB->debt()
        ]);
    }

    public function debtType(UserDB $userDB, $type_id)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $userDB->debtType([
                'type_id' => $type_id
            ])
        ]);
    }

    public function moneyMoveForm(SiteConfig $config)
    {
        $dtFrom = new \DateTime();
        $dtFrom->sub(new \DateInterval('P1M'));
        $dtTo = new \DateTime();
        $form = $this->createForm(
            MoneyMove::class,
            [
                'date_range' => [
                    $dtFrom->format($config->get('php_date_format')),
                    $dtTo->format($config->get('php_date_format'))
                ]
            ]
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function moneyMoveData(Request $request)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(MoneyMove::class);
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
            'success' => true
        ]);
    }
}
