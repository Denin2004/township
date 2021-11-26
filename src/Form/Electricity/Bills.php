<?php
namespace App\Form\Electricity;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;

class Bills extends ReactForm
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('year', ReactTextType::class)
            ->add(
                'month',
                ReactChoiceType::class,
                [
                    'choices' => [
                        'calendar.months.1' => 1,
                        'calendar.months.2' => 2,
                        'calendar.months.3' => 3,
                        'calendar.months.4' => 4,
                        'calendar.months.5' => 5,
                        'calendar.months.6' => 6,
                        'calendar.months.7' => 7,
                        'calendar.months.8' => 8,
                        'calendar.months.9' => 9,
                        'calendar.months.10' => 10,
                        'calendar.months.11' => 11,
                        'calendar.months.12' => 12
                    ]
                ]
            );
    }
}
