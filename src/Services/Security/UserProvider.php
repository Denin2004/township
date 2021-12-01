<?php
namespace App\Services\Security;

use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Twig\Environment;

use App\Services\Security\WebUser;
use App\Entity\UACEntity;

class UserProvider implements UserProviderInterface
{
    protected $requestStack;
    protected $encoder;
    protected $uac;
    protected $twig;

    public function __construct(RequestStack $requestStack, UserPasswordEncoderInterface $encoder, UACEntity $uac, Environment $twig)
    {
        $this->requestStack = $requestStack;
        $this->uac = $uac;
        $this->encoder = $encoder;
        $this->twig = $twig;
    }

    public function loadUserByUsername($username)
    {
        $request = $this->requestStack->getCurrentRequest();
        if ($username == '') {
            throw new BadCredentialsException('uac.errors.user_name_blank');
        }
        $password = $request->get('_password');
        if ($password == '') {
            throw new BadCredentialsException('uac.errors.password_blank');
        }
        $user = $this->uac->getUser($username);
        if (is_array($user)) {
            $webUser = new WebUser($user);
            if ($this->encoder->isPasswordValid($webUser, $password)) {
                $defaultAccess = json_decode($this->twig->render('/config/security.json.twig'), true);
                $webUser->setAccess($defaultAccess);
                return $webUser;
            }
            throw new BadCredentialsException('uac.errors.credentials');
        } else {
            throw new UsernameNotFoundException('uac.errors.user_not_found');
        }
        throw new \Exception('TODO: fill in loadUserByUsername() inside '.__FILE__);
    }

    public function refreshUser(UserInterface $user)
    {
        if (!$user instanceof UserInterface) {
            throw new UnsupportedUserException(sprintf('Invalid user class "%s".', get_class($user)));
        }
        return $user;
    }

    public function supportsClass($class)
    {
        return WebUser::class === $class;
    }
}
