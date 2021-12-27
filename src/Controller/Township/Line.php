<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Line as LineDB;

class Line extends AbstractController
{
    public function debt(LineDB $lineDB, $line)
    {
        $debt = $lineDB->debt(['line' => $line]);
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

    public function debtType(LineDB $lineDB, $line, $type_id)
    {
        $debt = $lineDB->debtType([
            'line' => $line,
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
