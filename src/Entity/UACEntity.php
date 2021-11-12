<?php
namespace App\Entity;

use App\Entity\Entity;

class UACEntity extends Entity
{
    public function getUser($login)
    {
        $user = $this->provider->db()->fetchAll(
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
        $res = $this->provider->db()->fetchAll(
            'select uac.roles.security
            from uac.users
            left join uac.roles on (uac.roles.id=uac.users.role_id)
            where uac.users.id=:id',
            ['id' => $id]
        );
        return count($res) == 0 ? ['security' => []] : $res[0];
    }
}
