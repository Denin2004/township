<?php
namespace App\Form\Land;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;


use App\Entity\Land;

class Owner extends ReactForm
{
    protected $landDB;

    public function __construct(Land $landDB)
    {
        $this->landDB = $landDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('id', ReactHiddenType::class)
            ->add('name', ReactTextType::class);
        if ($options['request'] == true) {
            $builder->add('land_id', IntegerType::class);
        } else {
            $builder->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->landDB->listChoices()
                ]
            );
        }
    }
}
