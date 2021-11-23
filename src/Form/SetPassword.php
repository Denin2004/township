<?php
namespace App\Form;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactPasswordType;
use App\Form\React\ReactHiddenType;

class SetPassword extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('password', ReactPasswordType::class)
            ->add('id', ReactHiddenType::class);
    }
}
