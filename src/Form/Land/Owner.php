<?php
namespace App\Form\Land;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactCheckboxType;


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
            ->add('name', ReactTextType::class)
            ->add('phone', ReactTextType::class)
            ->add('email', ReactTextType::class)
            ->add('township_member', ReactCheckboxType::class);
        if ($options['request'] == true) {
            $builder->add(
                'land_ids',
                CollectionType::class,
                [
                    'entry_type' => IntegerType::class,
                    'allow_add' => true
                ]
            );
        } else {
            $builder->add(
                'land_ids',
                ReactChoiceType::class,
                [
                    'choices' => $this->landDB->listChoices(),
                    'expanded' => false,
                    'multiple' => true
                ]
            );
        }
    }
}
