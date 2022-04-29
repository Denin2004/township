<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\ExtData;

class Page extends AbstractController
{
    public function data(ExtData $extDataDB)
    {
        return new JsonResponse([
            'success' => true,
            'data' => $extDataDB->unknowns()
        ]);
    }
}
