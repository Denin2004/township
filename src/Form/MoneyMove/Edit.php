<?php
namespace App\Form\MoneyMove;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactDateType;

use App\Entity\ExtData;

class Edit extends ReactForm
{
    protected $extDataDB;

    public function __construct(ExtData $extDataDB)
    {
        $this->extDataDB = $extDataDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('id', ReactHiddenType::class)
            ->add('table', ReactHiddenType::class)
            ->add('dt', ReactDateType::class)
            ->add('amount', ReactTextType::class);
    }
}
