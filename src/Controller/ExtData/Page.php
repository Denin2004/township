<?php

namespace App\Controller\ExtData;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

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
