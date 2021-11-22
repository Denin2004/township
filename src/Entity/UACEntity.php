<?php
namespace App\Entity;

use App\Entity\Entity;

class UACEntity extends Entity
{
    public function getUser($login)
    {
        $user = $this->provider->fetchAll(
            'select users.id, users.login, users.psw,
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

    public function accounts()
    {
        $res = $this->provider->fetchAll(
            'select users.id, users.login, roles.name role_name,
                lands.num, lands.id land_id
                from uac.users users
                left join uac.roles roles on (users.role_id=roles.id)
                left join lands.user_lands user_lands on (user_lands.user_id=users.id)
                left join lands.lands lands on (lands.id=user_lands.land_id)
            order by users.id'
        );
        $id = -1;
        $landsNames = [50, 63];
        foreach ($res as $key => $row) {
            if ($id != $row['id']) {
                if ($id != -1) {
                    $res[$keyRec]['lands'] = $landsNames;
                    $landsNames = [];
                }
                $id = $row['id'];
                $keyRec = $key;
                $res[$keyRec]['lands'] = [];
            }
            if ($row['land_id'] != '') {
                $landsNames[] = $row['num'];
            }
            if ($keyRec != $key) {
                unset($res[$key]);
            }
        }
        if ($id != -1) {
            $res[$keyRec]['lands'] = $landsNames;
        }
        return array_values($res);
    }

    public function account($id)
    {
        $res = $this->provider->fetchAll(
            'select users.id, users.login, users.role_id, user_lands.land_id
                from uac.users users
                left join lands.user_lands user_lands on (user_lands.user_id=users.id)
                where users.id=:id',
            [
                'id' => $id
            ]
        );
        if (count($res) == 0) {
            return false;
        }
        $res[0]['land_ids'] = ['4', '6'];
        foreach ($res as $key => $row) {
            if ($row['land_id'] != '') {
                $res[0]['land_ids'] = $row['land_id'];
            }
        }
        return $res[0];
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
}
