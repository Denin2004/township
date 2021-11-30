<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Land as LandDB;

class Land extends AbstractController
{
    public function debtByType(LandDB $landDB, $land_id, $type_id)
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
