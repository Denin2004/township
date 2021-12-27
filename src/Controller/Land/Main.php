<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Land as LandDB;

class Main extends AbstractController
{
    public function debtType(LandDB $landDB, $land_id, $type_id)
    {
        $debt = $landDB->debtByType([
            'land_id' => $land_id,
            'type_id' => $type_id
        ]);
        if (!$debt) {
            return new JsonResponse([
                'success' => false,
                'error' => 'security.error.403'
            ]);
        }

        return new JsonResponse([
            'success' => true,
            'debt' => $debt
        ]);
    }
}
