<?php

namespace App\Controller\Budget;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Budget;
use App\Services\SiteConfig\SiteConfig;

class Main extends AbstractController
{
    public function widget(Budget $budgetDB, SiteConfig $siteConfig)
    {
        return new JsonResponse([
            'success' => true,
            'info' => $budgetDB->widget($siteConfig->get('php_date_format'))
        ]);
    }

    public function list(Budget $budgetDB)
    {
        return new JsonResponse([
            'success' => true,
            'list' => $budgetDB->list()
        ]);
    }

    public function data(Budget $budgetDB, $budget_id)
    {
        return new JsonResponse([
            'success' => true,
            'budget' => $budgetDB->budget($budget_id)
        ]);
    }
}
