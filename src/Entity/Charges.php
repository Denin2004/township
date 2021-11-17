<?php
namespace App\Entity;

use App\Entity\Entity;

class Charges extends Entity
{
    public function addElectricityBill($data)
    {
        $this->provider->db()->executeQuery(
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
}
