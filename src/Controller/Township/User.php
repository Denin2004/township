<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\User as UserDB;

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
}
