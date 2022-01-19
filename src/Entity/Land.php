<?php
namespace App\Entity;

use App\Entity\Entity;

class Land extends Entity
{
    public function debtByType($params)
    {
        if (!$this->access($params['land_id'])) {
            return false;
        }
        return $this->provider->fetchAll(
            'select inv.id,
                case when inv.charge_type_id = 1 then el.invoice_num
                     when inv.charge_type_id = 2 then b_b.comment||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMONTH YYYY\')
                else \'\'
                end
                as invoice_num, inv.amount, inv.payed,
                inv.amount-inv.payed as debt, inv.charge_type_id, inv.month, inv.year,
                ct.name
                from balances.invoices inv
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join charges.types ct on(ct.id=inv.charge_type_id)
                    left join budget.budgets b_b on (b_b.id=inv.budget_id)
                where((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)and(inv.land_id=:land_id)',
            $params
        );
    }

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

    public function owners()
    {
        return $this->provider->fetchAll(
            'select lo.id, lo.land_id, lo.name, l.num
               from lands.owners lo
                 left join lands.lands l on(l.id=lo.land_id)'
        );
    }

    public function owner($id)
    {
        $res = $this->provider->fetchAll(
            'select lo.id, lo.land_id, lo.name
               from lands.owners lo
               where lo.id=:id',
            [
                'id' => $id
            ]
        );
        return count($res) == 0 ? false : $res[0];
    }

    public function ownerPost($params)
    {
        if ($params['id'] == -1) {
            $this->provider->executeQuery(
                'insert into lands.owners (land_id, name) values(:land_id, :name)',
                $params
            );
        } else {
            $this->provider->executeQuery(
                'update lands.owners set land_id=:land_id, name=:name where id=:id',
                $params
            );
        }
    }

    public function ownerDelete($id)
    {
        $this->provider->executeQuery(
            'delete from lands.owners where id=:id',
            [
                'id' => $id
            ]
        );
    }

    private function access($land_id)
    {
        return $this->provider->fetchAll(
            'select * from uac.land_access(:user_id, :land_id)',
            [
                'user_id' => $this->provider->user()->getId(),
                'land_id' => $land_id
            ]
        )[0]['p_access'];
    }
}
