<?php
namespace App\Entity;

use App\Entity\Entity;

class UACEntity extends Entity
{
    public function getUser($login)
    {
        $user = $this->provider->fetchAll(
            'select users.id, users.login, users.psw, users.line_manager,
                role.name role_name, role.security
                from uac.users users
                left join uac.roles role on (role.id=users.role_id)
                where users.login=:login',
            ['login' => $login]
        );
        return count($user) == 0 ? false : $user[0];
    }

    public function userAccess($id)
    {
        $res = $this->provider->fetchAll(
            'select uac.roles.security
            from uac.users
            left join uac.roles on (uac.roles.id=uac.users.role_id)
            where uac.users.id=:id',
            ['id' => $id]
        );
        return count($res) == 0 ? ['security' => []] : $res[0];
    }

    public function usersCount()
    {
        $res = $this->provider->fetchAll(
            'select count(*) cnt from uac.users'
        );
        return count($res) == 0 ? -1 : $res[0]['cnt'];
    }

    public function accounts($account_id = -1)
    {
        $res = $this->provider->fetchAll(
            'select users.id, users.login, users.role_id,
                roles.name role_name,
                lands.num, lands.id land_id
                from uac.users users
                left join uac.roles roles on (users.role_id=roles.id)
                left join lands.user_lands user_lands on (user_lands.user_id=users.id)
                left join lands.lands lands on (lands.id=user_lands.land_id)'.($account_id == -1 ? '': 'where (users.id=:id)').'
            order by users.id',
            [
                'id' => $account_id
            ]
        );
        $id = -1;
        $landNames = [];
        $landIDs = [];
        foreach ($res as $key => $row) {
            if ($id != $row['id']) {
                if ($id != -1) {
                    $res[$keyRec]['lands'] = $landNames;
                    $res[$keyRec]['land_ids'] = $landIDs;
                    $landNames = [];
                    $landIDs = [];
                }
                $id = $row['id'];
                $keyRec = $key;
                $res[$keyRec]['lands'] = [];
            }
            if ($row['land_id'] != '') {
                $landNames[] = $row['num'];
                $landIDs[] = $row['land_id'];
            }
            if ($keyRec != $key) {
                unset($res[$key]);
            }
        }
        if ($id != -1) {
            $res[$keyRec]['lands'] = $landNames;
            $res[$keyRec]['land_ids'] = $landIDs;
        }
        return array_values($res);
    }

    public function roleChoices()
    {
        $dbRes = $this->provider->fetchAll('select id, name from uac.roles');
        $res = [];
        foreach ($dbRes as $row) {
            $res[$row['name']] = $row['id'];
        }
        return $res;
    }

    public function accountPost($params)
    {
        $params['password'] = $params['id'] != -1 ? '' : $params['password'];
        $stmt = $this->provider->executeQuery(
            'select uac.user_post(?::integer,?::character varying,?::integer,array[?]::integer[],?::character varying)',
            [
                $params['id'],
                $params['login'],
                $params['role_id'],
                $params['land_ids'],
                $params['password']
            ],
            [
                \Doctrine\DBAL\ParameterType::INTEGER,
                \Doctrine\DBAL\ParameterType::STRING,
                \Doctrine\DBAL\ParameterType::INTEGER,
                \Doctrine\DBAL\Connection::PARAM_INT_ARRAY,
                \Doctrine\DBAL\ParameterType::STRING,
            ]
        );
        return $stmt->fetchAll();
    }

    public function setPassword($params)
    {
        $this->provider->executeQuery(
            'update uac.users set psw=:password where id=:id',
            $params
        );
    }
}
