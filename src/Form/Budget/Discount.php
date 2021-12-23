<?php
namespace App\Form\Budget;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;


use App\Entity\Land;
use App\Entity\Budget;

class Discount extends ReactForm
{
    protected $landDB;
    protected $budgetDB;

    public function __construct(Land $landDB, Budget $budgetDB)
    {
        $this->landDB = $landDB;
        $this->budgetDB = $budgetDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('discount', ReactTextType::class);
        if ($options['request'] == true) {
            $builder->add('land_id', IntegerType::class)
                ->add('item_name_id', IntegerType::class);
        } else {
            $builder->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->landDB->listChoices()
                ]
            )->add(
                'item_name_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->budgetDB->itemNameChoices()
                ]
            );
        }
    }
}
