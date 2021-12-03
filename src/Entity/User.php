<?php
namespace App\Entity;

use App\Entity\Entity;

class User extends Entity
{
    public function debt()
    {
        return $this->provider->fetchAll(
            'select ch_t.id, ch_t.name, sum(bl_lands.amount) debt
                from lands.user_lands land
                   inner join balances.lands bl_lands on(bl_lands.land_id=land.land_id)and(bl_lands.amount > 0)
                   left join charges.types ch_t on(ch_t.id=bl_lands.charge_type_id)
                where land.user_id = :user_id
                group by ch_t.id, ch_t.name',
            [
                'user_id' => $this->provider->user()->getId()
            ]
        );
    }

    public function debtType($params)
    {
        $params['user_id'] = $this->provider->user()->getId();
        return $this->provider->fetchAll(
            'select inv.id, el.invoice_num, inv.amount, inv.payed, inv.amount-inv.payed as debt
                from lands.user_lands land
                    inner join balances.invoices inv on (inv.land_id=land.land_id)and
                         ((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)
                    left join charges.electricity el on (el.invoice_id=inv.id)
                 where land.user_id = :user_id',
            $params
        );
    }

    public function moneyMove($params)
    {
        $params['user_id'] = $this->provider->user()->getId();
        $params['format'] = $this->provider->dateFormat();
        $params['date_from'] = $params['date_range'][0];
        $params['date_to'] = $params['date_range'][1];
        return $this->provider->fetchAll(
            'select to_char(mm.dt, :format) as dt1, mm.* from balances.money_move(:user_id, to_date(:date_from, :format), to_date(:date_to, :format)) mm',
            $params
        );
    }
}
