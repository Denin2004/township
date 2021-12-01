<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Line as LineDB;

class LineManager extends AbstractController
{
    public function debtLine(LineDB $lineDB)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $lineDB->debt(['line' => $this->getUser()->getLine()])
        ]);
    }

    public function debtByType(LineDB $lineDB, $type_id)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $lineDB->debtType([
                'line' => $this->getUser()->getLine(),
                'type_id' => $type_id
            ])
        ]);
    }
}
