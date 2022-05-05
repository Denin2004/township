<?php
namespace App\Form\Land;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactChoiceType;

use App\Entity\Land;

class Debt extends ReactForm
{
    protected $landDB;

    public function __construct(Land $landDB)
    {
        $this->landDB = $landDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['request'] == true) {
            $builder->add('land_id', IntegerType::class);
        } else {
            $choices = $this->landDB->listChoices();
            $builder->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $choices
                ]
            );
        }
    }
}
