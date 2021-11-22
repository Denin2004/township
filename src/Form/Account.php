<?php
namespace App\Form;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactChoiceType;

use App\Entity\UACEntity;
use App\Entity\Lands;

class Account extends ReactForm
{

    protected $myACP;

    public function __construct(UACEntity $uacDB, Lands $landsDB)
    {
        $this->uacDB = $uacDB;
        $this->landsDB = $landsDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('login', ReactTextType::class)
            ->add('id', ReactHiddenType::class)
            ->add(
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
