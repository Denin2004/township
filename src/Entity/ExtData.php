<?php
namespace App\Entity;

use App\Entity\Entity;

class ExtData extends Entity
{
    public function add($data)
    {
        $data['format'] = $this->provider->dateFormat();
        $this->provider->executeQuery(
            'select ext_data.add (
                :unknown_id,
                to_date(:dt, :format),
                :amount,
                :month,
                :year,
                :land,
                :charge_code,
                :budget_item)',
            $data
        );
    }

    public function unknownsCount()
    {
        return $this->provider->fetchAll('select count(*) as cnt from ext_data.unknown')[0]['cnt'];
    }

    public function unknowns()
    {
        return $this->provider->fetchAll(
            'select
                ed_u.id,
                to_char(ed_u.dt, :format) as dt,
                ed_u.amount,
                ed_u.month,
                ed_u.year,
                ed_u.land,
                ed_u.charge_code,
                b_in.name budget_item_name,
                error
             from ext_data.unknown ed_u
                left join budget.items b_i on (b_i.id=ed_u.budget_item_id)
                left join budget.item_names b_in on (b_in.id = b_i.item_name_id)
             order by id desc',
            [
                'format' => $this->provider->dateFormat()
            ]
        );
    }

    public function unknown($params)
    {
        $params['format'] = $this->provider->dateFormat();
        $res = $this->provider->fetchAll(
            'select
                ed_u.id,
                to_char(ed_u.dt, :format) as dt,
                ed_u.amount,
                ed_u.month,
                ed_u.year,
                ed_u.land,
                ed_u.charge_code,
                ed_u.budget_item_id
             from ext_data.unknown ed_u
                 left join budget.items b_i on (b_i.id=ed_u.budget_item_id)
             where ed_u.id=:id',
            $params
        );
        return count($res) != 0 ? $res[0] : false;
    }

    public function budgetChoices()
    {
        $res = $this->provider->fetchAll(
            'select b_b.id,
            c_t.name||\' \'||to_char(b_b.dt_from, :format)||\' - \'||to_char(b_b.dt_to, :format) as name
                from budget.budgets b_b
                 left join charges.types c_t on (c_t.id=b_b.charge_type_id)
            where (now()::date between b_b.dt_from and b_b.dt_to)',
            [
                'format' => $this->provider->dateFormat()
            ]
        );
        $options = [];
        foreach ($res as $row) {
            $options[$row['name']] = $row['id'];
        }
        return $options;
    }

    public function budgetItemChoices($budget_id)
    {
        $res = $this->provider->fetchAll(
            'select b_in.name, b_bi.id
                from budget.budgets b_b
                inner join budget.items b_bi on (b_bi.budget_id=b_b.id)
                inner join budget.item_names b_in on (b_in.id=b_bi.item_name_id)
            where (b_b.id=:id)',
            [
                'id' => $budget_id
            ]
        );
        $options = [];
        foreach ($res as $row) {
            $options[$row['name']] = $row['id'];
        }
        return $options;
    }

    public function landChoices()
    {
        $res = $this->provider->fetchAll('select num from lands.lands');
        $options = [];
        foreach ($res as $row) {
            $options[$row['num']] = $row['num'];
        }
        return $options;
    }

    public function typeChoices()
    {
        $res = $this->provider->fetchAll('select code, name from charges.types');
        $options = [];
        foreach ($res as $row) {
            $options[$row['name']] = $row['code'];
        }
        return $options;
    }

    public function post($params)
    {
        $params['format'] = $this->provider->dateFormat();
        $this->provider->executeQuery(
            'update ext_data.unknown set amount=:amount,
                month=:month,
                year=:year,
                budget_item_id=:budget_item_id,
                charge_code=:charge_code,
                land=:land,
                dt=to_date(:dt, :format)
              where id=:id',
            $params
        );
    }
}
