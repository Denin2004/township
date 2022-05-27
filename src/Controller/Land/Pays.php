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
    
    public function distribute(LandDB $landDB, $pay_id, $invoice_id, $distribute)
    {
        $landDB->payDistribute([
                'pay_id' => $pay_id,
                'invoice_id' => $invoice_id,
                'distribute' => $distribute
            ]);
        return new JsonResponse([
            'success' => true,
            'distributed' => $landDB->payDistributed([
                'pay_id' => $pay_id
            ])
        ]);
    }
    
    public function delete(LandDB $landDB, $pay_id)
    {
        $res = $landDB->payDelete([
                'pay_id' => $pay_id
            ]);
        if (!$res) {
            return new JsonResponse([
                'success' => false,
                'error' => 'finance.errors.money_move_not_found'
            ]);
        }
        $prePays = $landDB->prePayByType([
            'land_id' => $res['land_id'],
            'type_id' => $res['type_id']
        ]);
        if (!$prePays) {
            return new JsonResponse([
                'success' => false,
                'error' => 'security.error.403'
            ]);
        }
        return new JsonResponse([
            'success' => true,
            'prePays' => $prePays,
            'charge_type_id' => $res['type_id']
        ]);
    }
}
