<?php
namespace App\Form\ExtData;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;

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
                ->add('tp', TextType::class)
                ->add('budget', TextType::class)
                ->add('budget_item', TextType::class);
        } else {
            $builder->add('budget', ReactTextType::class)
                ->add('budget_item', ReactTextType::class);

            $budgets = $this->extDataDB->budgetChoices();
/*            $budgetID = '';
            $itemID = '';
            $itemChoices = [];
            if (key($budgets) != null) {
                $budgetID = $budgets[key($budgets)];
                $itemChoices = $this->budgetDB->childItemChoices($budgets[key($budgets)]);
                $itemID = key($itemChoices) != null ? $itemChoices[key($itemChoices)] : '';
            }
            $builder->add(
                'budget',
                ReactChoiceType::class,
                [
                    'choices' => $budgets,
                    'data' => $budgetID
                ]
            )->add(
                'item_id',
                ReactChoiceType::class,
                [
                    'choices' => $itemChoices,
                    'data' => $itemID
                ]
            );*/
        }
        $builder->add('id', ReactHiddenType::class)
            ->add('dt', ReactDateType::class)
            ->add('month', ReactTextType::class)
            ->add('year', ReactTextType::class)
            ->add('amount', ReactTextType::class);
    }
}
