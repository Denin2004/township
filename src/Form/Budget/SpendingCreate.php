<?php
namespace App\Form\Budget;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactDateType;

use App\Entity\Budget;

class SpendingCreate extends ReactForm
{
    protected $budgetDB;

    public function __construct(Budget $budgetDB)
    {
        $this->budgetDB = $budgetDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('item_id', IntegerType::class)
                ->add('budget_id', IntegerType::class);
        } else {
            $budgets = $this->budgetDB->choices();
            $budgetID = '';
            $itemID = '';
            $itemChoices = [];
            if (key($budgets) != null) {
                $budgetID = $budgets[key($budgets)];
                $itemChoices = $this->budgetDB->childItemChoices($budgets[key($budgets)]);
                $itemID = key($itemChoices) != null ? $itemChoices[key($itemChoices)] : '';
            }
            $builder->add(
                'budget_id',
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
            );
        }
        $builder->add('comment', ReactTextType::class)
            ->add('date', ReactDateType::class)
            ->add('amount', ReactTextType::class);
    }
}
