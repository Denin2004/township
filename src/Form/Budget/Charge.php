<?php
namespace App\Form\Budget;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactChoiceType;

use App\Entity\Land;

class Charge extends ReactForm
{

    protected $landDB;

    public function __construct(Land $landDB)
    {
        $this->landDB = $landDB;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $dt = new \DateTime;

        $builder->add(
            'year',
            ReactTextType::class,
            [
                'data' => $dt->format('Y')
            ]
        )->add(
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
                ],
                'data' => $dt->format('n')
            ]
        );
        if ($options['request'] == true) {
            $builder->add('land_id', IntegerType::class);
        } else {
            $choices = $this->landDB->listChoices();
            $choices['land.all'] = -1;
            $builder->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $choices,
                    'data' => -1
                ]
            );
        }
    }
}
