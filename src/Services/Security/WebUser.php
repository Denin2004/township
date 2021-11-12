<?php
namespace App\Services\Security;

use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\EquatableInterface;

class WebUser implements UserInterface, EquatableInterface
{
    private $salt = '';
    private $roles = ['ROLE_ADMIN'];
    private $user;

    public function __construct($user)
    {
        $this->user = $user;
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
/*        $route = $subject->attributes->get('_route');
        return isset($this->userAccess['routes'][$route]) ? $this->userAccess['routes'][$route] : true;*/
    }
}
