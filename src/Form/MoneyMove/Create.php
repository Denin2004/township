<?php
namespace App\Form\MoneyMove;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactDateType;

use App\Entity\ExtData;
use App\Entity\Charges;
use App\Entity\Land;

class Create extends ReactForm
{
    protected $extDataDB;
    protected $charegsDB;
    protected $landDB;

    public function __construct(ExtData $extDataDB, Charges $chargesDB, Land $landDB)
    {
        $this->extDataDB = $extDataDB;
        $this->charegsDB = $chargesDB;
        $this->landDB = $landDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('land_id', TextType::class)
                ->add('charge_type_id', TextType::class)
                ->add('budget_id', TextType::class)
                ->add('budget_item_id', TextType::class)
                ->add('start_invoice_id', TextType::class)
                ->add('month', IntegerType::class);
        } else {
            $chargeChoices = $this->charegsDB->typeChoices();
            $chargeChoices['budget.spendings._'] = -1;
            $builder->add(
                'budget_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->extDataDB->budgetChoices()
                ]
            )->add(
                'budget_item_id',
                ReactChoiceType::class,
                [
                    'choices' => []
                ]
            )->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->landDB->listChoices()
                ]
            )->add(
                'start_invoice_id',
                ReactChoiceType::class,
                [
                    'choices' => []
                ]
            )->add(
                'charge_type_id',
                ReactChoiceType::class,
                [
                    'choices' => $chargeChoices
                ]
            );
        }
        $builder->add('dt', ReactDateType::class)
            ->add('amount', ReactTextType::class);
    }
}
