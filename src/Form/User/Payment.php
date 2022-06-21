<?php
namespace App\Form\User;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactChoiceType;

use App\Entity\User as UserDB;
use App\Entity\Invoice as InvoiceDB;

class Payment extends ReactForm
{
    protected $userDB;
    protected $invoiceDB;

    public function __construct(UserDB $userDB, InvoiceDB $invoiceDB)
    {
        $this->userDB = $userDB;
        $this->invoiceDB = $invoiceDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('charge_type_id', ReactHiddenType::class)
            ->add('invoice_id', ReactHiddenType::class)
            ->add('tax', ReactHiddenType::class);
        if ($options['request'] == true) {
            $builder->add(
                'land_id',
                IntegerType::class
            )
            ->add(
                'invoice_id',
                IntegerType::class
            )
            ->add(
                'amount',
                ReactTextType::class
            );
        } else {
            if ($options['data']['charge_type_id'] != null) {
                $debt = $this->userDB->chargeTypeDebt($options['data']['charge_type_id']);
                if (count($debt) > 1) {
                    $landChoices = [];
                    $amountChoices = [];
                    foreach ($debt as $db) {
                        $landChoices[$db['num']] = $db['land_id'];
                        $amountChoices[$db['debt']] = $db['land_id'];
                    }
                    $builder->add(
                        'land_id',
                        ReactChoiceType::class,
                        [
                            'choices' => $landChoices,
                            'data' => $debt[0]['land_id']
                        ]
                    )
                    ->add(
                        'amount',
                        ReactChoiceType::class,
                        [
                            'choices' => $amountChoices,
                            'data' => $debt[0]['land_id']
                        ]
                    );
                } else {
                    $builder->add(
                        'land_id',
                        ReactHiddenType::class,
                        [
                            'data' => $debt[0]['land_id']
                        ]
                    )
                    ->add(
                        'amount',
                        ReactTextType::class,
                        [
                            'data' => $debt[0]['debt']
                        ]
                    );
                }
            }
            if ($options['data']['invoice_id'] != null) {
                $info = $this->invoiceDB->info($options['data']['invoice_id']);
                $builder->add('land_id', ReactHiddenType::class)
                ->add(
                    'amount',
                    ReactTextType::class,
                    [
                        'data' => $info[0]['debt']
                    ]
                );
            }
        }
    }
}
