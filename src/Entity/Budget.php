<?php
namespace App\Entity;

use App\Entity\Entity;

class Budget extends Entity
{
    public function widget($phpDateFormat)
    {
        $dt = new \DateTime();
        return $this->provider->fetchAll(
            'select bd.id, bd.amount, bd.accrued, bd.collected, bd.spent
                from budget.budgets bd
                  where (to_date(:dt, :format) between bd.dt_from and bd.dt_to)',
            [
                'format' => $this->provider->dateFormat(),
                'dt' => $dt->format($phpDateFormat)
            ]
        );
    }

    public function choices()
    {
        $data = [];
        $budgets = $this->provider->fetchAll(
            'select bd.id, to_char(bd.dt_from, ;format)||\' - \'||to_char(bd.dt_to, :format) as name from budget.budgets bd',
            [
                'format' => $this->provider->dateFormat()
            ]
        );
        foreach ($budgets as $budget) {
            $data[$budget['name']] = $budget['id'];
        }
        return $data;
    }
}
