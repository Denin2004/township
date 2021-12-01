<?php

namespace App\Controller\Finance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Invoice as InvoiceDB;

class Invoice extends AbstractController
{
    public function data(InvoiceDB $invoiceDB, $id)
    {
        return new JsonResponse([
            'success' => true,
            'invoice' => $invoiceDB->data(['id' => $id])[0]['invoice']
        ]);
    }
}
