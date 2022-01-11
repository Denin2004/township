<?php
namespace App\Services\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\EquatableInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

class WebUser implements UserInterface, EquatableInterface, PasswordUpgraderInterface, PasswordAuthenticatedUserInterface
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

    public function getPassword(): ?string
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

    public function getUserIdentifier()
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

        if ($this->user['login'] !== $user->getUserName()/*$user->getUserIdentifier()*/) {
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
        $route = $subject->attributes->get('_route');
        return in_array($route, $this->access['routes']);
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
            case 'security':
                return $this->user['security'];
        }
    }

    public function setAccess($defaultAccess)
    {
        $defaultAccess = array_replace_recursive($defaultAccess, $this->user['security']);
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
