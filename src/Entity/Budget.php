<?php
namespace App\Entity;

use App\Entity\Entity;

class Budget extends Entity
{
    public function widget($phpDateFormat)
    {
        $dtStart = new \DateTime();
        $dtStart->setDate($dtStart->format('Y'), 1, 1);
        $dtEnd = new \DateTime();
        $dtEnd->setDate($dtEnd->format('Y'), 12, 31);

        return $this->provider->fetchAll(
            'select bd.id, bd.amount, bd.accrued, bd.collected, bd.spent,
                bd.comment||\' \'||to_char(bd.dt_from, :format)||\' - \'||to_char(bd.dt_to, :format) as name
                from budget.budgets bd
                  where (bd.dt_from between to_date(:dtStart, :format) and (to_date(:dtEnd, :format))) or
                      (bd.dt_to between to_date(:dtStart, :format) and (to_date(:dtEnd, :format)))',
            [
                'format' => $this->provider->dateFormat(),
                'dtStart' => $dtStart->format($phpDateFormat),
                'dtEnd' => $dtEnd->format($phpDateFormat)
            ]
        );
    }

    public function list()
    {
        $data = [
            'options' => [],
            'default' => 0
        ];
        $budgets = $this->provider->fetchAll(
            'select b_b.id, c_t.name||\' \'||to_char(b_b.dt_from, :format)||\' - \'||to_char(b_b.dt_to, :format) as name,
                case
                   when now()::date between b_b.dt_from and b_b.dt_to
                   then 1
                    else 0
                end as current
                from budget.budgets b_b
                   left join charges.types c_t on (c_t.id=b_b.charge_type_id)
                order by id desc',
            [
                'format' => $this->provider->dateFormat()
            ]
        );
        foreach ($budgets as $budget) {
            $data['options'][] = [
                'label' => $budget['name'],
                'value' => $budget['id']
            ];
            if ($budget['current'] == 1) {
                $data['current'] = $budget['id'];
            }
        }
        $data['default'] = $data['default'] == 0 ? (isset($data['options'][0]) ? $data['options'][0]['value'] : 0) : 0;
        return $data;
    }

    public function budget($budgetID)
    {
        $data = $this->provider->fetchAll(
            'with recursive budget AS (
                select itms.id, itms.parent_id, itms.item_name_id,
                   itms.amount, itms.accrued, itms.spent, itms.tax,
                   itms.by_month, itms.comments,
                   itm_names.name,
                   bd.months
                from budget.items itms
                   left join budget.item_names itm_names on(itm_names.id=itms.item_name_id)
                   left join budget.budgets bd on(bd.id=itms.budget_id)
                where itms.budget_id=:budget_id
                union
                select childs.id, childs.parent_id, childs.item_name_id,
                   childs.amount, childs.accrued, childs.spent, childs.tax,
                   childs.by_month, childs.comments,
                   itm_names.name,
                   bd1.months
                from budget.items childs
                   inner JOIN budget bd ON childs.parent_id = bd.id
                   left join budget.item_names itm_names on(itm_names.id=childs.item_name_id)
                   left join budget.budgets bd1 on(bd1.id=childs.budget_id)
            )
            select *from budget order by 1',
            ['budget_id' => $budgetID]
        );
        $res = [];
        foreach ($data as $row) {
            if ($row['parent_id'] == null) {
                $res[] = $row;
            } else {
                $this->addChild($res, $row);
                if (!isset($parent['children'])) {
                    $parent['children'] = [];
                }
                $parent['children'][] = $row;
            }
        }
        return $res;
    }

    private function addChild(&$res, $child)
    {
        foreach ($res as $key => $row) {
            if ($row['id'] == $child['parent_id']) {
                if (!isset($res[$key]['children'])) {
                    $res[$key]['children'] = [];
                }
                $res[$key]['children'][] = $child;
                return true;
            }
            if (isset($res[$key]['children']) && $this->addChild($res[$key]['children'], $child)) {
                return true;
            }
        }
        return false;
    }

    public function item($id)
    {
        return $this->provider->fetchAll(
            'select id, amount, tax, item_name_id, comments, by_month from budget.items where id=:id',
            [
                'id' => $id
            ]
        );
    }

    public function itemNameChoices()
    {
        $data = $this->provider->fetchAll('select id, name from budget.item_names');
        $res = [];
        foreach ($data as $row) {
            $res[$row['name']] = $row['id'];
        }
        return $res;
    }

    public function itemPost($params)
    {
        $this->provider->executeQuery(
            'update budget.items set item_name_id=:item_name_id,
                amount=:amount, tax=:tax, comments=:comments
                where id=:id',
            $params
        );
    }

    public function addItemName($name)
    {
        return $this->provider->fetchAll(
            'insert into budget.item_names (name)values(:name) returning id',
            [
                'name' => $name
            ]
        )[0];
    }

    public function itemCreate($params)
    {
        $params['by_month'] = $params['by_month'] ? 't' : 'f';
        $this->provider->executeQuery(
            'insert into budget.items (parent_id, item_name_id, amount, tax, comments, by_month, budget_id)
                values(:parent_id, :item_name_id, :amount, :tax, :comments, :by_month, :budget_id)',
            $params
        );
    }

    public function itemDelete($id)
    {
        $this->provider->executeQuery(
            'delete from budget.items where id=:id',
            [
                'id' => $id
            ]
        );
    }

    public function itemSpending($id)
    {
        return $this->provider->fetchAll(
            'select bs.id, to_char(bs.dt, :format) as dt,
                bs.amount, bs.comment,
                bin.name
                from budget.items bi
                inner join budget.spendings bs on(bs.item_id=bi.id)
                inner join budget.item_names bin on(bin.id=bi.item_name_id)
                where(bi.id in (
                    with recursive budget AS (
                    select itms.id
                    from budget.items itms
                    where itms.id=:id
                    union
                    select childs.id
                    from budget.items childs
                       inner JOIN budget bd ON childs.parent_id = bd.id
                    )
                    select * from budget
                ))order by bs.dt',
            [
                'id' => $id,
                'format' => $this->provider->dateFormat()
            ]
        );
    }

    public function discounts()
    {
        return $this->provider->fetchAll(
            'select bd.land_id||\' \'||bd.item_name_id as id,
                 bd.land_id, bd.item_name_id, bd.discount,
                l.num, bi.name
               from charges.budget_discount bd
                 left join lands.lands l on(l.id=bd.land_id)
                 left join budget.item_names bi on (bi.id=bd.item_name_id)'
        );
    }

    public function discount($params)
    {
        $res = $this->provider->fetchAll(
            'select bd.land_id, bd.item_name_id, bd.discount
               from charges.budget_discount bd
               where (bd.land_id=:land_id)and(bd.item_name_id=:item_name_id)',
            $params
        );
        return count($res) == 0 ? false : $res[0];
    }

    public function discountPost($params)
    {
            $this->provider->executeQuery(
                'insert into charges.budget_discount (land_id, item_name_id, discount)
                    values(:land_id, :item_name_id, :discount)
                 on conflict (land_id, item_name_id) do update  set discount=:discount
                    where (charges.budget_discount.land_id=:land_id)and(charges.budget_discount.item_name_id=:item_name_id)',
                $params
            );
    }

    public function discountDelete($params)
    {
        $this->provider->executeQuery(
            'delete from charges.budget_discount where (land_id=:land_id)and(item_name_id=:item_name_id)',
            $params
        );
    }

    public function choices()
    {
        $data = [];
        $res = $this->provider->fetchAll(
            'select bd.id, to_char(bd.dt_from, :format)||\' - \'||to_char(bd.dt_to, :format)||\' \'||bd.comment as name,
                case
                   when now()::date between bd.dt_from and bd.dt_to
                   then 1
                    else 0
                end as current
                from budget.budgets bd order by id desc',
            [
                'format' => $this->provider->dateFormat()
            ]
        );
        foreach ($res as $row) {
            $data[$row['name']] = $row['id'];
        }
        return $data;
    }

    public function childItemChoices($budgetID)
    {
        $res = $this->provider->fetchAll(
            'select bi.id,\'(\'||bi.id||\') \'||bin.name as name, count(bi_c.id)
                from budget.items bi
                   left join budget.items bi_c on (bi_c.parent_id=bi.id)
                   left join budget.item_names bin on (bin.id=bi.item_name_id)
                where bi.budget_id=:id
                group by bi.id, bin.name
                having count(bi_c.id) = 0
                order by 2',
            [
                'id' => $budgetID
            ]
        );
        $data = [];
        foreach ($res as $row) {
            $data[$row['name']] = $row['id'];
        }
        return $data;
    }

    public function spendingPost($params)
    {
        $params['format'] = $this->provider->dateFormat();
        if ($params['id'] == -1) {
            $this->provider->executeQuery(
                'insert into budget.spendings (dt, item_id, amount, comment)
                    values(to_date(:date, :format), :item_id, :amount, :comment)',
                $params
            );
        } else {
            $this->provider->executeQuery('', $params);
        }
    }

    public function charge($params)
    {
        $this->provider->executeQuery(
            'select charges.charge_budget(:month, :year, :land_id)',
            $params
        );
    }
}
