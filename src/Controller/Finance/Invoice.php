<?php

namespace App\Controller\Finance;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\Invoice as InvoiceDB;

class Invoice extends AbstractController
{
    public function data(InvoiceDB $invoiceDB, $id)
    {
        $invoice = $invoiceDB->data(['id' => $id]);
        if (!$invoice) {
            return new JsonResponse([
                'success' => fasle,
                'error' => 'finance.invoice.errors.no_found'
            ]);
        }
        return new JsonResponse([
            'success' => true,
            'invoice' => $invoice
        ]);
    }
}
