<?php
namespace App\Form\Budget;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactCheckboxType;

use App\Entity\Budget;

class ItemCreate extends ReactForm
{
    protected $budgetDB;

    public function __construct(Budget $budgetDB)
    {
        $this->budgetDB = $budgetDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('item_name_id', IntegerType::class);
        } else {
            $builder->add(
                'item_name_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->budgetDB->itemNameChoices()
                ]
            );
        }
        $builder->add('comments', ReactTextType::class)
            ->add('tax', ReactTextType::class)
            ->add('by_month', ReactCheckboxType::class)
            ->add('amount', ReactTextType::class)
            ->add('parent_id', ReactHiddenType::class)
            ->add('budget_id', ReactHiddenType::class);
    }
}
