<?php
namespace App\Services\Security;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use App\Services\Security\WebUser;

class RouteVoter extends Voter
{

    protected function supports($attribute, $subject)
    {
        return true;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        if ($attribute === 'IS_AUTHENTICATED_ANONYMOUSLY') {
            return true;
        }
        $user = $token->getUser();
        if (!$user instanceof WebUser) {
            return false;
        }
        return $user->getAccess($subject);
//        return true;
    }
}
