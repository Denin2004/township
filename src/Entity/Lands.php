<?php
namespace App\Entity;

use App\Entity\Entity;

class Lands extends Entity
{
    public function listChoices()
    {
        $dbRes = $this->provider->fetchAll(
            'select id, num from lands.lands'
        );
        $res = [];
        foreach ($dbRes as $row) {
            $res[$row['num']] = $row['id'];
        }
        return $res;
    }
}
