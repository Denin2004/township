<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Land as LandDB;

class Main extends AbstractController
{
    public function debtType(LandDB $landDB, $land_id, $type_id)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $landDB->debtByType([
                'land_id' => $land_id,
                'type_id' => $type_id
            ])
        ]);
    }
}
