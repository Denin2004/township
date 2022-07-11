<?php
namespace App\Form\MoneyMove;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactRangeType;

class SitePays extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'date_range',
            ReactRangeType::class,
            [
                'request' => isset($options['request']) ? $options['request'] : false
            ]
        );
    }
}
