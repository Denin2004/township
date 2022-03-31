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
            'select inv.id,
                case when inv.charge_type_id = 1 then ll.num||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                     when inv.charge_type_id = 2 then b_b.comment||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                else \'\'
                end
                as invoice_num,
                inv.amount, inv.payed, inv.amount-inv.payed as debt
                from lands.user_lands land
                    inner join balances.invoices inv on (inv.land_id=land.land_id)and
                         ((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join budget.budgets b_b on (b_b.id=inv.budget_id)
                    left join lands.lands ll on (ll.id=land.land_id)
                 where land.user_id = :user_id
                 order by inv.year desc, inv.month desc',
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

    public function lands()
    {
        return $this->provider->fetchAll(
            'select ll.num
                from lands.user_lands ul
                   left join lands.lands ll on (ll.id=ul.land_id)
                   where (ul.user_id=:user_id)',
            [
                'user_id' => $this->provider->user()->getId()
            ]
        );
    }

    public function chargesByType($params)
    {
        $params['user_id'] = $this->provider->user()->getId();
        return $this->provider->fetchAll(
            'select inv.id,
                case when inv.charge_type_id = 1 then ll.num||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                     when inv.charge_type_id = 2 then b_b.comment||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                else \'\'
                end
                as invoice_num,
                inv.amount
                from lands.user_lands land
                    inner join balances.invoices inv on (inv.land_id=land.land_id)and
                         ((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join budget.budgets b_b on (b_b.id=inv.budget_id)
                    left join lands.lands ll on (ll.id=land.land_id)
                 where (land.user_id = :user_id)and
                 (inv.year=:year)
                 order by inv.year desc, inv.month desc',
            $params
        );
    }
}
