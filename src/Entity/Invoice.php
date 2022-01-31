<?php
namespace App\Entity;

use App\Entity\Entity;

class Invoice extends Entity
{
    public function data($params)
    {
        $params['user_id'] = $this->provider->user()->getId();
        $data = $this->provider->fetchAll(
            'select * from balances.get_invoice(:user_id, :id)',
            $params
        );
        if ($this->isError() or (count($data) == 0)) {
            return false;
        }
        $res = json_decode($data[0]['invoice'], true);
        switch ($res['chargeType']) {
            case 2:
                $res['specs'] = [];
                foreach ($data as $row) {
                    $res['specs'][] = json_decode($row['invoice'], true);
                }
        }
        return $res;
    }
}
