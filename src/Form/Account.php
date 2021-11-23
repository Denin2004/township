<?php
namespace App\Form;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactChoiceType;

use App\Entity\UACEntity;
use App\Entity\Lands;

class Account extends ReactForm
{

    protected $uacDB;
    protected $landsDB;

    public function __construct(UACEntity $uacDB, Lands $landsDB)
    {
        $this->uacDB = $uacDB;
        $this->landsDB = $landsDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('login', ReactTextType::class)
            ->add('id', ReactHiddenType::class);
        if ($options['request'] == true) {
            $builder->add(
                'role_id',
                IntegerType::class
            )
            ->add(
                'land_ids',
                CollectionType::class,
                [
                    'entry_type' => IntegerType::class,
                    'allow_add' => true
                ]
            );
        } else {
            $builder->add(
                'role_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->uacDB->roleChoices()
                ]
            )
            ->add(
                'land_ids',
                ReactChoiceType::class,
                [
                    'choices' => $this->landsDB->listChoices(),
                    'expanded' => false,
                    'multiple' => true
                ]
            );
        }
    }
}
