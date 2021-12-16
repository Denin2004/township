<?php
namespace App\Entity;

use App\Entity\Entity;

class Budget extends Entity
{
    public function widget($phpDateFormat)
    {
        $dt = new \DateTime();
        return $this->provider->fetchAll(
            'select bd.id, bd.amount, bd.accrued, bd.collected, bd.spent
                from budget.budgets bd
                  where (to_date(:dt, :format) between bd.dt_from and bd.dt_to)',
            [
                'format' => $this->provider->dateFormat(),
                'dt' => $dt->format($phpDateFormat)
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
            'select bd.id, to_char(bd.dt_from, :format)||\' - \'||to_char(bd.dt_to, :format) as name,
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
}
