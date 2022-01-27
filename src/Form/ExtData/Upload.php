<?php
namespace App\Form\ExtData;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactFileType;

class Upload extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', ReactFileType::class);
    }
}
