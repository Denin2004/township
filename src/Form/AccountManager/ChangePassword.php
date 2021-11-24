<?php
namespace App\Form\AccountManager;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactPasswordType;
use App\Form\React\ReactHiddenType;

class ChangePassword extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('old_password', ReactPasswordType::class)
            ->add('new_password', ReactPasswordType::class)
            ->add('new1_password', ReactPasswordType::class)
            ->add('id', ReactHiddenType::class);
    }
}
