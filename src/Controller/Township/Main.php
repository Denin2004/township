<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Township as TownshipDB;

class Main extends AbstractController
{
    public function debt(TownshipDB $townshipDB)
    {

        return new JsonResponse([
            'success' => true,
            'debt' => $townshipDB->debt()
        ]);
    }
}
