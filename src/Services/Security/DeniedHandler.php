<?php
namespace App\Services\Security;

use Symfony\Component\Security\Http\Authorization\AccessDeniedHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;

class DeniedHandler implements AccessDeniedHandlerInterface
{
    private $translator;
    private $router;

    public function __construct(ContainerInterface $container, RouterInterface $router)
    {
        $this->router = $router;
        $this->translator = $container->get('translator');
    }

    public function handle(Request $request, AccessDeniedException $accessDeniedException)
    {
        if ($request->isXmlHttpRequest()) {
            return new JsonResponse(
                [
                    'data' => [
                        [
                            'showToast' => [
                                'text' => $this->translator->trans('errors.route_forbidden'),
                                'type' => 'error'
                            ]
                        ]
                    ]
                ]
            );
        }
        return new RedirectResponse($this->router->generate('error403'));
    }
}
