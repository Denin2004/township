<?php
namespace App\Entity;

use App\Entity\Entity;

class Charges extends Entity
{
    public function addElectricityBill($data)
    {
        $this->provider->executeQuery(
            'select charges.charge_electricity (
                :month,
                :year,
                :land_id,
                :dayStart,
                :dayEnd,
                :dayRate,
                :dayAmount,
                :nightStart,
                :nightEnd,
                :nightRate,
                :nightAmount,
                :billNum)',
            $data
        );
    }

    public function electricityBillsSum($params)
    {
        return $this->provider->fetchAll(
            'select sum(b_i.amount) from balances.invoices b_i where (b_i.month=:month)and(b_i.year=:year)and(b_i.charge_type_id=1)',
            $params
        );
    }

    public function monthBills($params)
    {
        return $this->provider->fetchAll(
            'select c_e.id, c_e.night_meter_start, c_e.day_meter_start,
                c_e.night_meter_end, c_e.day_meter_end,
                c_e.night_rate, c_e.day_rate,
                c_e.night_amount, c_e.day_amount,
                land.num,
                b_i.amount, b_i.payed
                    from balances.invoices b_i
                       left join charges.electricity c_e on(b_i.id=c_e.invoice_id)
                       left join lands.lands land on(land.id=b_i.land_id)
                where (b_i.month=:month)and(b_i.year=:year)and(b_i.charge_type_id=1)
                order by land.num',
            $params
        );
    }

    public function list()
    {
        return $this->provider->fetchAll(
            'select c.id, c.name
                from charges.types c
                order by c.name'
        );
    }

    public function typeChoices()
    {
        $res = $this->provider->fetchAll('select id, name from charges.types');
        $options = [];
        foreach ($res as $row) {
            $options[$row['name']] = $row['id'];
        }
        return $options;
    }
}
