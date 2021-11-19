<?php

namespace App\Controller\AccountManager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\UACEntity;

class Main extends AbstractController
{
    public function count(UACEntity $uacDB)
    {
        $res = [
            'success' => true,
            'count' => $uacDB->usersCount()
        ];
        return new JsonResponse($res);
    }
}
