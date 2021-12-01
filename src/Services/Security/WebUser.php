<?php
namespace App\Services\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\EquatableInterface;

class WebUser implements UserInterface, EquatableInterface
{
    private $salt = '';
    private $roles = ['ROLE_ADMIN'];
    private $user;
    private $access = [
        'routes' => [],
        'widgets' => []
    ];

    public function __construct($user)
    {
        $this->user = $user;
        $this->user['security'] = $this->user['security'] == '' ? ['widgets' => []] : json_decode($this->user['security'], true);
        $this->access['widgets'] = $this->user['security']['widgets'];
    }

    public function getRoles()
    {
        return $this->roles;
    }

    public function getPassword()
    {
        return $this->user['psw'];
    }

    public function getSalt()
    {
        return $this->salt;
    }

    public function getUsername()
    {
        return $this->user['login'];
    }

    public function eraseCredentials()
    {
    }

    public function isEqualTo(UserInterface $user)
    {
        if (!$user instanceof WebUser) {
            return false;
        }

        if ($this->user['psw'] !== $user->getPassword()) {
            return false;
        }

        if ($this->salt !== $user->getSalt()) {
            return false;
        }

        if ($this->user['login'] !== $user->getUsername()) {
            return false;
        }
        return true;
    }

    public function getId()
    {
        return $this->user['id'];
    }

    public function getAccess($subject)
    {
        return true;
        $route = $subject->attributes->get('_route');
        return in_array($this->access['routes'], $route);
/*        $route = $subject->attributes->get('_route');
        return isset($this->userAccess['routes'][$route]) ? $this->userAccess['routes'][$route] : true;*/
    }

    public function get($param)
    {
        switch ($param) {
            case 'line':
                return $this->user['line_manager'];
            case 'widgets':
                return $this->access['widgets'];
            case 'routes':
                return $this->access['routes'];
        }
    }

    public function setAccess($defaultAccess)
    {
        $defaultAccess = array_merge($defaultAccess, $this->user['security']);
        foreach ($defaultAccess['routes'] as $routes) {
            if ($routes['access'] == true) {
                $this->access['routes'] = array_merge($this->access['routes'], $routes['routes']);
            }
        }
        foreach ($defaultAccess['mapping'] as $map) {
            switch ($map['type']) {
                case 'routesToWidget':
                    if (in_array($map['widget'], $this->access['widgets'])) {
                        $this->access['routes'] = array_merge($this->access['routes'], $map['routes']);
                    }
                    break;
            }
        }
    }
}
