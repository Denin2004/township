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
                :budget,
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
                id,
                to_char(dt, :format) as dt,
                amount,
                month,
                year,
                land,
                charge_code,
                budget,
                budget_item,
                error
             from ext_data.unknown order by id desc',
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
                id,
                to_char(dt, :format) as dt,
                amount,
                month,
                year,
                land,
                charge_code,
                budget,
                budget_item
             from ext_data.unknown where id=:id',
            $params
        );
        return count($res) != 0 ? $res[0] : false;
    }

    public function budgetChoices()
    {
        $res = $this->provider->fetchAll('select distinct comment from budget.budgets');
        $options = [];
        foreach ($res as $row) {
            $options[$row['comment']] = $row['comment'];
        }
        return $options;
    }

    public function budgetItemChoices($params)
    {
        $res = $this->provider->fetchAll(
            'select b_in.name
                from budget.budgets b_b
                inner join budget.items b_bi on (b_bi.budget_id=b_b.id)
                inner join budget.item_names b_in on (b_in.id=b_bi.item_name_id)
            where (b_b.comment=:budget)and
               (to_date(:month||\'.\'||:year, \'MM.YYYY\') between b_b.dt_from and b_b.dt_to)',
            $params
        );
        $options = [];
        foreach ($res as $row) {
            $options[$row['name']] = $row['name'];
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
                budget=:budget,
                budget_item=:budget_item,
                charge_code=:charge_code,
                dt=to_date(:dt, :format)
              where id=:id',
            $params
        );
    }
}
