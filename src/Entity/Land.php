<?php
namespace App\Entity;

use App\Entity\Entity;

class Land extends Entity
{
    public function debtByType($params)
    {
        return $this->provider->fetchAll(
            'select inv.id, el.invoice_num, inv.amount, inv.payed, inv.amount-inv.payed as debt
                from balances.invoices inv
                    left join charges.electricity el on (el.invoice_id=inv.id)
                where((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)and(inv.land_id=:land_id)',
            $params
        );
    }
}
