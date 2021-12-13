<?php
namespace App\Form\Electricity;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactChoiceType;
use App\Entity\Budget;

class View extends ReactForm
{
    private $budgetDB;


    public function __construct(Budget $budgetDB)
    {
        $this->budgetDB = $budgetDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'budget_id',
            ReactChoiceType::class,
            [
                'choices' => $this->budgetDB->choices()
            ]
        );
    }
}
