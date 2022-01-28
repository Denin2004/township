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
                :type,
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
                tp,
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
                tp,
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
}
