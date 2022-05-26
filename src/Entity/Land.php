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
                     when inv.budget_id is not null then to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMONTH YYYY\')
                else \'\'
                end
                as invoice_num, inv.amount, inv.payed,
                inv.amount-inv.payed as debt, inv.charge_type_id, inv.month, inv.year,
                ct.name
                from balances.invoices inv
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join charges.types ct on(ct.id=inv.charge_type_id)
                    left join budget.budgets b_b on (b_b.id=inv.budget_id)
                where((inv.amount-inv.payed) > 0)and(inv.charge_type_id=:type_id)and(inv.land_id=:land_id)
                order by inv.year desc, inv.month desc',
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
            'select l_o.id, l_o.name, l_o.phone, l_o.email,
                l_o.township_member,
                (select string_agg(l_l.num, \',\')
                  from lands.owner_lands l_ol
                    left join lands.lands l_l on (l_l.id=l_ol.land_id)
                 where l_ol.owner_id=l_o.id) as lands
               from lands.owners l_o order by l_o.name'
        );
    }

    public function owner($id)
    {
        $res = $this->provider->fetchAll(
            'select l_o.id, l_o.name, l_o.phone, l_o.email,
                l_o.township_member,
                (select string_agg(l_ol.land_id::text, \',\')
                  from lands.owner_lands l_ol
                 where l_ol.owner_id=l_o.id) as lands
               from lands.owners l_o
               where l_o.id=:id',
            [
                'id' => $id
            ]
        );
        return count($res) == 0 ? false : $res[0];
    }

    public function ownerPost($params)
    {
        $stmt = $this->provider->executeQuery(
            'select lands.owner_post(
                ?::integer,
                ?::character varying,
                ?::character varying,
                ?::character varying,
                ?::boolean,
                array[?]::integer[])',
            [
                $params['id'],
                $params['name'],
                $params['phone'],
                $params['email'],
                $params['township_member'],
                $params['land_ids']
            ],
            [
                \Doctrine\DBAL\ParameterType::INTEGER,
                \Doctrine\DBAL\ParameterType::STRING,
                \Doctrine\DBAL\ParameterType::STRING,
                \Doctrine\DBAL\ParameterType::STRING,
                \Doctrine\DBAL\ParameterType::BOOLEAN,
                \Doctrine\DBAL\Connection::PARAM_INT_ARRAY
            ]
        );
        return $stmt->fetchAll();
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

    public function debt($params)
    {
        return $this->provider->fetchAll(
            'select ch_t.id, ch_t.name, sum(bl_lands.amount) debt, bl_lands.land_id
                from  balances.lands bl_lands
                   left join charges.types ch_t on(ch_t.id=bl_lands.charge_type_id)
                where (bl_lands.land_id = :land_id)and(bl_lands.amount > 0)
                group by ch_t.id, ch_t.name, bl_lands.land_id',
            $params
        );
    }
    
    public function prePays($params)
    {
        return $this->provider->fetchAll(
            'select ch_t.id, ch_t.name, sum(0-bl_lands.amount) debt, bl_lands.land_id
                from  balances.lands bl_lands
                   left join charges.types ch_t on(ch_t.id=bl_lands.charge_type_id)
                where (bl_lands.land_id = :land_id)and(bl_lands.amount < 0)
                group by ch_t.id, ch_t.name, bl_lands.land_id',
            $params
        );
    }

    public function chargesByType($params)
    {
        return $this->provider->fetchAll(
            'select inv.id,
                case when inv.charge_type_id = 1 then ll.num||\' \'||to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                     when inv.budget_id is not null then to_char(to_date(inv.month||\'.\'||inv.year, \'MM.YYYY\'), \'TMMON YY\')
                else \'\'
                end
                as invoice_num,
                inv.amount
                from balances.invoices inv
                    left join charges.electricity el on (el.invoice_id=inv.id)
                    left join budget.budgets b_b on (b_b.id=inv.budget_id)
                    left join lands.lands ll on (ll.id=inv.land_id)
                 where (inv.land_id = :land_id)and
                 (inv.charge_type_id=:type_id)and
                 (inv.year=:year)
                 order by inv.year desc, inv.month desc',
            $params
        );
    }
    
    public function prePayByType($params)
    {
        if (!$this->access($params['land_id'])) {
            return false;
        }
        $params['format'] = $this->provider->dateFormat();
        return $this->provider->fetchAll(
            'select pays.id, to_char(pays.dt, :format) as dt, pays.amount, pays.distributed
                from balances.pays pays
                where((pays.amount-pays.distributed) > 0)and(pays.charge_type_id=:type_id)and(pays.land_id=:land_id)
                order by pays.dt',
            $params
        );
    }
    
    public function moneyMove($params)
    {
        $params['format'] = $this->provider->dateFormat();
        $params['date_from'] = $params['date_range'][0];
        $params['date_to'] = $params['date_range'][1];
        return $this->provider->fetchAll(
            'select to_char(mm.dt, :format) as dt1, mm.* from lands.money_move(:land_id, to_date(:date_from, :format), to_date(:date_to, :format)) mm',
            $params
        );
    }
    
    public function payDistributed($params)
    {
        $info = $this->provider->fetchAll(
            'select b_p.amount-b_p.distributed distributed
                from balances.pays b_p
                where b_p.id=:pay_id',
            $params
        );
        
        return [
            'data' => $this->provider->fetchAll(
                'select b_i.id,
                    to_char(to_date(b_i.month||\'.\'||b_i.year, \'MM.YYYY\'), \'TMMON YY\') period,
                    b_i.amount,
                    c_t.name charge_name,
                    b_ip.amount distributed,
                    b_i.amount-b_i.payed debt,
                    1 checked
                    from balances.invoice_pay b_ip
                      left join balances.invoices b_i on(b_i.id=b_ip.invoice_id)
                      left join charges.types c_t on(c_t.id=b_i.charge_type_id)
                    where b_ip.pay_id=:pay_id
                union
                  select b_i.id,
                    to_char(to_date(b_i.month||\'.\'||b_i.year, \'MM.YYYY\'), \'TMMON YY\') period,
                    b_i.amount,
                    c_t.name charge_name,
                    0.0 distributed,
                    b_i.amount-b_i.payed debt,
                    0 checked
                    from balances.pays b_p
                       left join charges.types c_t on(c_t.id=b_p.charge_type_id)
                       left join balances.invoices b_i on(b_i.charge_type_id=c_t.id)and(b_i.land_id=b_p.land_id)
                    where (b_p.id=:pay_id)and(b_i.amount<>b_i.payed)',
                $params
            ),
            'info' => isset($info[0]) ? $info[0] : null
        ];
    }
}
