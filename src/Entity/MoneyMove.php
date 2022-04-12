<?php
namespace App\Entity;

use App\Entity\Entity;

class MoneyMove extends Entity
{
    public function data($params)
    {
        $params['format'] = $this->provider->dateFormat();
        $params['date_from'] = $params['date_range'][0];
        $params['date_to'] = $params['date_range'][1];
        return $this->provider->fetchAll(
            'select b_p.id,  b_p.dt, to_char(b_p.dt, :format) as dt_frmt,
                  b_p.amount amount_in, 0 amount_out,
                c_t.name type_name, l_l.num,
                balances.pay_invoices(b_p.id) as comment,
                \'pays\' as table
                from balances.pays b_p
                  left join charges.types c_t on (c_t.id=b_p.charge_type_id)
                  left join lands.lands l_l on (l_l.id=b_p.land_id)
                where (b_p.dt between to_date(:date_from, :format) and to_date(:date_to, :format))
            union
               select b_s.id, b_s.dt, to_char(b_s.dt, :format) as dt_frmt, 0 amount_in, b_s.amount amount_out,
                 \'finance.outs\', null,
                 b_in.name||\' \'||to_char(b_b.dt_from, :format)||\' - \'||to_char(b_b.dt_to, :format)||\' \'||c_t.name as comment,
                \'spendings\' as table
                 from budget.spendings b_s
                    left join budget.items b_i on (b_i.id=b_s.item_id)
                    left join budget.item_names b_in on (b_in.id=b_i.item_name_id)
                    left join budget.budgets b_b on (b_b.id=b_i.budget_id)
                    left join charges.types c_t on (c_t.id=b_b.charge_type_id)
                 where (b_s.dt between to_date(:date_from, :format) and to_date(:date_to, :format))
                order by 2',
            $params
        );
    }

    public function editData($params)
    {
        $params['format'] = $this->provider->dateFormat();
        $res = $this->provider->fetchAll(
            'select b_p.id, to_char(b_p.dt, :format) as dt, b_p.amount,
                c_t.name type_name, l_l.num,
                balances.pay_invoices(b_p.id) as comment,
                \'pays\' as table
                from balances.pays b_p
                  left join charges.types c_t on (c_t.id=b_p.charge_type_id)
                  left join lands.lands l_l on (l_l.id=b_p.land_id)
                where (b_p.id = :id)and(\'pays\'=:table)
            union
               select b_s.id, to_char(b_s.dt, :format) as dt, b_s.amount,
                 \'finance.outs\', null,
                 b_in.name||\' \'||to_char(b_b.dt_from, :format)||\' - \'||to_char(b_b.dt_to, :format)||\' \'||c_t.name as comment,
                \'spendings\' as table
                 from budget.spendings b_s
                    left join budget.items b_i on (b_i.id=b_s.item_id)
                    left join budget.item_names b_in on (b_in.id=b_i.item_name_id)
                    left join budget.budgets b_b on (b_b.id=b_i.budget_id)
                    left join charges.types c_t on (c_t.id=b_b.charge_type_id)
                 where (b_s.id=:id)and(\'spendings\'=:table)',
            $params
        );
        return count($res) != 0 ? $res[0] : false;
    }

    public function post($params)
    {
        $params['format'] = $this->provider->dateFormat();
        switch ($params['table']) {
            case 'pays':
                $this->provider->executeQuery(
                    'update balances.pays set amount=:amount,
                        dt=to_date(:dt, :format)
                      where id=:id',
                    $params
                );
                break;
            case 'spendings':
                $this->provider->executeQuery(
                    'update budget.spendings set amount=:amount,
                        dt=to_date(:dt, :format)
                      where id=:id',
                    $params
                );
                break;
        }
    }

    public function delete($params)
    {
        switch ($params['table']) {
            case 'pays':
                $this->provider->executeQuery(
                    'delete from balances.pays where id=:id',
                    $params
                );
                break;
            case 'spendings':
                $this->provider->executeQuery(
                    'delete from budget.spendings where id=:id',
                    $params
                );
                break;
        }
    }

    public function create($params)
    {
        $params['format'] = $this->provider->dateFormat();
        if ($params['charge_type_id'] != -1) {
            $this->provider->executeQuery(
                'insert into balances.pays(dt, land_id, amount, charge_type_id, start_invoice_id)
                    values(to_date(:dt, :format), :land_id, :amount, :charge_type_id, :start_invoice_id)',
                $params
            );
        } else {
            $this->provider->executeQuery(
                'insert into budget.spendings (dt, amount, item_id)
                    values(to_date(:dt, :format), :amount, :budget_item_id)',
                $params
            );
        }
    }
}
