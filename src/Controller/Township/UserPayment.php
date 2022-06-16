<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGenerator;

use App\Entity\User as UserDB;
use App\Form\User\Payment;

use Mobile_Detect;

class UserPayment extends AbstractController
{
    public function success(SiteConfig $config, UserDB $userDB, $order_id)
    {
        $detect = new Mobile_Detect;
        $mode = 'mobile';
        //$mode = $detect->isMobile() ? 'mobile' : 'web';
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral')
            ]
        );
    }
    
    public function form($charge_type_id, $invoice_id)
    {
        $form = $this->createForm(
            Payment::class,
            [
                'charge_type_id' => $charge_type_id == -1 ? null : $charge_type_id,
                'invoice_id' => $invoice_id == -1 ? null : $invoice_id
            ]
        );
        $view = $form->createView();
        return new JsonResponse([
            'success' => true,
            'form' => $view->vars['react']
        ]);
    }

    public function pay(Request $request, UserDB $userDB)
    {
        $formRequest = json_decode($request->getContent(), true);
        if ($formRequest == null) {
            return new JsonResponse([
                'success' => false,
                'error' => 'form.errors.noData'
            ]);
        }
        $form = $this->createForm(Payment::class, [], ['request' => true]);
        $formRequest['land_id'] = is_array($formRequest['land_id']) ? $formRequest['land_id'][0] : $formRequest['land_id'];
        $form->submit($formRequest);
        if (!$form->isValid()) {
            $errors = '';
            foreach ($form->getErrors(true) as $error) {
                $errors.= $error->getMessage().' ';
            }
            return new JsonResponse([
                'success' => false,
                'error' => $errors
            ]);
        }
        $formData = $form->getData();
        $formData['uniqid'] = uniqid();
        dump($formData);
        /*        dump($this->generateUrl('userPaymentSuccess', ['order_id' => $formData['uniqid']], UrlGenerator::ABSOLUTE_URL));
                $res = $this->sberREST([
                    'url' => 'https://3dsec.sberbank.ru/payment/rest/register.do',
                    'data' => [
                        'orderNumber' => $formData['uniqid'],
                        'amount' => $formData['amount']*100,
                        'returnUrl' => $this->generateUrl('userPaymentSuccess', ['order_id' => $formData['uniqid']], UrlGenerator::ABSOLUTE_URL),
                        'failUrl' => $this->generateUrl('userPaymentFail', ['order_id' => $formData['uniqid']], UrlGenerator::ABSOLUTE_URL)
                    ]
                ]);
                if ($res['success']) {
                    $formData['sberOrder'] = $res['data']['orderId'];
                    $userDB->createPaymentOrder($formData);
                    return new JsonResponse([
                        'success' => true,
                        'redirect' => $res['data']['formUrl']
                    ]);
                }
                return new JsonResponse([
                    'success' => false,
                    'error' => $res['error']
                ]);*/
        return new JsonResponse([
            'success' => false,
            'error' => 'ssss'
        ]);
    }
    
    private function sberREST($params)
    {
        /*        $data = array_merge(
                    [
                        'userName' => 't7802551492-api',
                        'password' => 'o0BKfPxD'
                    ],
                    $params['data']
                );
                $ch = curl_init($params['url']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
                curl_setopt(
                    $ch,
                    CURLOPT_HTTPHEADER,
                    [
                       'Content-Type: application/x-www-form-urlencoded'
                    ]
                );

                $res = json_decode(curl_exec($ch), true);
                $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                $result = [
                    'success' => ($code == 200)&&(!isset($res['errorCode'])),
                    'data' => $res,
                    'error' => isset($res['errorMessage']) ? $res['errorMessage'] : ''
                ];*/
        return [
                    'success' => true,
                    'data' => [
                        'orderId' => '12583b88-59bf-7637-8555-c7582891a039',
                        'formUrl' => 'https://3dsec.sberbank.ru/payment/merchants/sbersafe_sberid/payment_ru.html?mdOrder=12583b88-59bf-7637-8555-c7582891a039'
                    ]
                ];
        return $result;
    }
}
