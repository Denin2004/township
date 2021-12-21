<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Land as LandDB;

class Owner extends AbstractController
{
    public function data(LandDB $landDB)
    {
        return new JsonResponse([
            'success' => true,
            'owners' => $landDB->owners()
        ]);
    }
}
