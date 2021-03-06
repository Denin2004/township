<?php
namespace App\Entity;

use App\Entity\Entity;

class Township extends Entity
{
    public function debt()
    {
        return $this->provider->fetchAll(
            'select ch_t.id, ch_t.name, sum(bl_lands.amount) debt
                from balances.lands bl_lands
                   left join charges.types ch_t on(ch_t.id=bl_lands.charge_type_id)
                where bl_lands.amount > 0
                group by ch_t.id, ch_t.name'
        );
    }

    public function debtByLines($params)
    {
        return $this->provider->fetchAll(
            'select land.line, bl_lands.charge_type_id, sum(bl_lands.amount) debt
                from balances.lands bl_lands
                   left join lands.lands land on(land.id=bl_lands.land_id)
                where (bl_lands.amount > 0)and(bl_lands.charge_type_id=:type)
                group by land.line, bl_lands.charge_type_id
                order by land.line',
            $params
        );
    }
}
