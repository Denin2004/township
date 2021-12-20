<?php
namespace App\Entity;

use App\Entity\Entity;

class Land extends Entity
{
    public function debtByType($params)
    {
        return $this->provider->fetchAll(
            'select inv.id, el.invoice_num, inv.amount, inv.payed,
                inv.amount-inv.payed as debt, inv.charge_type_id, inv.month, inv.year,
                ct.name
                from balances.invoices inv
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join charges.types ct on(ct.id=inv.charge_type_id)
                where((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)and(inv.land_id=:land_id)and(inv.charge_type_id=1)
            union
            select inv.id, \'\'::character  varying, inv.amount, inv.payed,
                inv.amount-inv.payed as debt, inv.charge_type_id, inv.month, inv.year,
                ct.name
                from balances.invoices inv
                  left join charges.types ct on(ct.id=inv.charge_type_id)
                where((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)and(inv.land_id=:land_id)and(inv.charge_type_id=2)',
            $params
        );
    }
}
