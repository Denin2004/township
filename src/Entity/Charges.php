<?php
namespace App\Entity;

use App\Entity\Entity;

class Charges extends Entity
{
    public function addElectricityBill($data)
    {
        $this->provider->executeQuery(
            'insert into charges.electricity (
                land_id,
                month,
                year,
                day_meter_start,
                day_meter_end,
                day_rate,
                day_amount,
                night_meter_start,
                night_meter_end,
                night_rate,
                night_amount,
                invoice_num)values(
                :land_id,
                :month,
                :year,
                :dayStart,
                :dayEnd,
                :dayRate,
                :dayAmount,
                :nightStart,
                :nightEnd,
                :nightRate,
                :nightAmount,
                :billNum) on conflict (invoice_num) do update set
                day_meter_start=:dayStart,
                day_meter_end=:dayEnd,
                day_rate=:dayRate,
                day_amount=:dayAmount,
                night_meter_start=:nightStart,
                night_meter_end=:nightEnd,
                night_rate=:nightRate,
                night_amount=:nightAmount where (charges.electricity.invoice_num=:billNum)',
            $data
        );
    }

    public function electricityBillsSum($params)
    {
        return $this->provider->fetchAll(
            'select sum(el.night_amount+el.day_amount) from charges.electricity el where (el.month=:month)and(el.year=:year)',
            $params
        );
    }

    public function monthBills($params)
    {
        return $this->provider->fetchAll(
            'select el.id, el.night_meter_start, el.day_meter_start,
                el.night_meter_end, el.day_meter_end,
                el.night_rate, el.day_rate,
                el.night_amount, el.day_amount,
                land.num,
                inv.amount, inv.payed
                    from charges.electricity el
                       left join lands.lands land on(land.id=el.land_id)
                       left join balances.invoices inv on(inv.id=el.invoice_id)
                where (el.month=:month)and(el.year=:year)
                order by land.num',
            $params
        );
    }
}
