<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Budget;
use App\Services\SiteConfig\SiteConfig;

class Item extends AbstractController
{
    public function form(Budget $budgetDB, SiteConfig $siteConfig)
    {
        return new JsonResponse([
            'success' => true,
            'info' => $budgetDB->widget($siteConfig->get('php_date_format'))
        ]);
    }
}
