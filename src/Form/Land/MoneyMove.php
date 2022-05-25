<?php
namespace App\Form\Land;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactRangeType;
use App\Form\React\ReactHiddenType;

class MoneyMove extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'date_range',
            ReactRangeType::class,
            [
                'request' => isset($options['request']) ? $options['request'] : false
            ]
        )->add('land_id', ReactHiddenType::class);
    }
}
