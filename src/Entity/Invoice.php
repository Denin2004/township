<?php
namespace App\Entity;

use App\Entity\Entity;

class Invoice extends Entity
{
    public function data($params)
    {
        $params['user_id'] = $this->provider->user()->getId();
        return $this->provider->fetchAll(
            'select * from balances.get_invoice(:user_id, :id)',
            $params
        );
    }
}
