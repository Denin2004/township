<?php
namespace App\Entity;

use App\Entity\Entity;

class Line extends Entity
{
    public function debt($params)
    {
        if (!$this->access($params['line'])) {
            return false;
        }
        return $this->provider->fetchAll(
            'select ch_t.id, ch_t.name, sum(bl_lands.amount) debt
                from lands.lands land
                   inner join balances.lands bl_lands on(bl_lands.land_id=land.id)and(bl_lands.amount > 0)
                   left join charges.types ch_t on(ch_t.id=bl_lands.charge_type_id)
                where land.line = :line
                group by ch_t.id, ch_t.name',
            $params
        );
    }

    public function debtType($params)
    {
        if (!$this->access($params['line'])) {
            return false;
        }
        return $this->provider->fetchAll(
            'select land.num, land.id, bl_lands.charge_type_id, sum(bl_lands.amount) debt
                from lands.lands land
                    inner join balances.lands bl_lands on(bl_lands.land_id=land.id)and(bl_lands.amount > 0)and(bl_lands.charge_type_id=:type_id)
                where land.line = :line
                group by land.num, land.id, bl_lands.charge_type_id',
            $params
        );
    }

    private function access($line)
    {
        return $this->provider->fetchAll(
            'select * from uac.line_access(:user_id, :line)',
            [
                'user_id' => $this->provider->user()->getId(),
                'line' => $line
            ]
        )[0]['p_access'];
    }
}
