<?php

namespace App\Controller\Township;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGenerator;

use App\Entity\User as UserDB;
use App\Form\User\Payment;
use App\Services\SiteConfig\SiteConfig;

use Mobile_Detect;

class UserPayment extends AbstractController
{
    protected $urlCreatePayment = 'https://3dsec.sberbank.ru/payment/rest/register.do';
    protected $urlCheckPayment = 'https://3dsec.sberbank.ru/payment/rest/getOrderStatusExtended.do';

    public function success(Request $request, SiteConfig $config, UserDB $userDB)
    {
        $detect = new Mobile_Detect;
        $mode = 'mobile';
        //$mode = $detect->isMobile() ? 'mobile' : 'web';
        $qry = $request->query->all();
        $res = $this->sberREST([
            'url' => $this->urlCheckPayment,
            'data' => [
                'orderId' => $qry['orderId']
            ]
        ]);
        $result = null;
        if ($res['success']) {
            if ($res['data']['orderStatus'] == 2) {
                $doPay = $userDB->doPaymentOrder($qry['orderId']);
                if ($userDB->isError()) {
                    $result = [
                        'success' => false,
                        'error' => $userDB->getError()
                    ];
                } else {
                    if ($doPay[0]['do_payment_order'] == 0) {
                        $result = [
                            'success' => true,
                            'comment' => 'finance.pay_success'
                        ];
                    }
                }
            } else {
                $result = [
                    'success' => false,
                    'error' => $res['error']
                ];
            }
        } else {
            $result = [
                'success' => false,
                'error' => $res['error']
            ];
        }
        return $this->render(
            'base.'.$mode.'.html.twig',
            [
                'numeral' => $config->get('numeral'),
                'result' => $result
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
        $res = $this->sberREST([
            'url' => $this->urlCreatePayment,
            'data' => [
                'orderNumber' => $formData['uniqid'],
                'amount' => $formData['amount']*100,
                'returnUrl' => $this->generateUrl('userPaymentSuccess', [], UrlGenerator::ABSOLUTE_URL),
                'failUrl' => $this->generateUrl('userPaymentFail', [], UrlGenerator::ABSOLUTE_URL)
            ]
        ]);
        if ($res['success']) {
            $formData['payment_order'] = $res['data']['orderId'];
            $userDB->createPaymentOrder($formData);
            return new JsonResponse([
                'success' => true,
                'redirect' => $res['data']['formUrl']
            ]);
        }
        return new JsonResponse([
            'success' => false,
            'error' => $res['error']
        ]);
    }
    
    private function sberREST($params)
    {
        $data = array_merge(
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
            'success' => ($code == 200)&&((!isset($res['errorCode']))||($res['errorCode'] == 0)),
            'data' => $res,
            'error' => isset($res['errorMessage']) ? $res['errorMessage'] : ''
        ];
        return $result;
    }
}
