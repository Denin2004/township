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
                case when inv.charge_type_id = 1 then to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMONTH YYYY\')
                     when inv.budget_id is not tull then to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMONTH YYYY\')
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

    public function debtInvoiceChoices($params)
    {
        $data = $this->provider->fetchAll(
            'select b_i.id, to_char(to_date(b_i.month||\'.\'||b_i.year, \'MM.YYYY\'), \'TMMON YYYY\') as name,
                b_i.amount-b_i.payed debt, b_i.amount
                from balances.invoices b_i
                inner join charges.types c_t on (c_t.id=b_i.charge_type_id)and(c_t.id=:charge_type_id)
                where (b_i.land_id=:land_id)and(b_i.amount-b_i.payed>0)',
            $params
        );
        $res = [];
        foreach ($data as $row) {
            $res[] = [
                'label' => $row['name'],
                'value' => $row['id'],
                'debt' => $row['debt'],
                'amount' => $row['amount']
            ];
        }
        return $res;
    }

    public function lands()
    {
        return $this->provider->fetchAll(
            'select id, num, square from lands.lands order by num'
        );
    }

    public function post($params)
    {
        $this->provider->executeQuery(
            'update lands.lands set num=:num, square=:square where id=:id',
            $params
        );
    }
}
