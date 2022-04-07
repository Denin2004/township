<?php
namespace App\Form\ExtData;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactDateType;

use App\Entity\ExtData;

class Edit extends ReactForm
{
    protected $extDataDB;

    public function __construct(ExtData $extDataDB)
    {
        $this->extDataDB = $extDataDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('land', TextType::class)
                ->add('charge_code', TextType::class)
                ->add('budget_id', TextType::class)
                ->add('budget_item_id', TextType::class)
                ->add('month', IntegerType::class);
        } else {
            $chargeChoices = $this->extDataDB->typeChoices();
            $chargeChoices['budget.spendings._'] = 'р';
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
                    'choices' => $options['data']['budget_item_id'] != '' ?
                       $this->extDataDB->budgetItemChoices($options['data']['budget_id']) : []
                ]
            )->add(
                'land',
                ReactChoiceType::class,
                [
                    'choices' => $this->extDataDB->landChoices()
                ]
            )->add(
                'month',
                ReactChoiceType::class,
                [
                    'choices' => [
                        'calendar.months.1' => 1,
                        'calendar.months.2' => 2,
                        'calendar.months.3' => 3,
                        'calendar.months.4' => 4,
                        'calendar.months.5' => 5,
                        'calendar.months.6' => 6,
                        'calendar.months.7' => 7,
                        'calendar.months.8' => 8,
                        'calendar.months.9' => 9,
                        'calendar.months.10' => 10,
                        'calendar.months.11' => 11,
                        'calendar.months.12' => 12
                    ]
                ]
            )->add(
                'charge_code',
                ReactChoiceType::class,
                [
                    'choices' => $chargeChoices
                ]
            );
        }
        $builder->add('id', ReactHiddenType::class)
            ->add('dt', ReactDateType::class)
            ->add('year', ReactTextType::class)
            ->add('amount', ReactTextType::class);
    }
}
