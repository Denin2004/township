<?php

namespace App\Controller\Land;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Land as LandDB;

class Pays extends AbstractController
{
    public function distributed(LandDB $landDB, $pay_id)
    {
        return new JsonResponse([
            'success' => true,
            'distributed' => $landDB->payDistributed([
                'pay_id' => $pay_id
            ])
        ]);
    }
}
