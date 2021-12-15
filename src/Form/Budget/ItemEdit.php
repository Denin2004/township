<?php
namespace App\Form\Budget;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;

use App\Entity\Budget;

class ItemEdit extends ReactForm
{
    protected $budgetDB;

    public function __construct(Budget $budgetDB)
    {
        $this->budgetDB = $budgetDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('item_name_id', IntegerType::class)
                ->add('tax', ReactHiddenType::class)
                ->add('amount', ReactHiddenType::class);
        } else {
            $builder->add(
                'item_name_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->budgetDB->itemNameChoices()
                ]
            );
            if ($options['data']['tax'] == null) {
                $builder->add('tax', ReactHiddenType::class)
                    ->add('amount', ReactHiddenType::class);
            } else {
                $builder->add('tax', ReactTextType::class)
                    ->add('amount', ReactTextType::class);
            }
        }
        $builder->add('id', ReactHiddenType::class)
            ->add('comments', ReactTextType::class);
    }
}
