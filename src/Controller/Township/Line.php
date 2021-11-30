<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Line as LineDB;

class Line extends AbstractController
{
    public function debt(LineDB $lineDB, $line)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $lineDB->debt(['line' => $line])
        ]);
    }

    public function debtType(LineDB $lineDB, $line, $type_id)
    {
        return new JsonResponse([
            'success' => true,
            'debt' => $lineDB->debtType([
                'line' => $line,
                'type_id' => $type_id
            ])
        ]);
    }
}
