<?php
namespace App\Form\Land;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;

class Edit extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('id', ReactHiddenType::class)
            ->add('num', ReactTextType::class)
            ->add('square', ReactTextType::class);
    }
}
