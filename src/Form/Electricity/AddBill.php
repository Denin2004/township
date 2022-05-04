<?php
namespace App\Form\Electricity;

use Symfony\Component\Form\FormBuilderInterface;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactChoiceType;
use App\Entity\Land;

class AddBill extends ReactForm
{
    protected $landDB;

    public function __construct(Land $landDB)
    {
        $this->landDB = $landDB;
    }

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
            )
            ->add('dayStart', ReactTextType::class)
            ->add('dayEnd', ReactTextType::class)
            ->add('dayRate', ReactTextType::class)
            ->add('dayAmount', ReactTextType::class)
            ->add('nightStart', ReactTextType::class)
            ->add('nightEnd', ReactTextType::class)
            ->add('nightRate', ReactTextType::class)
            ->add('nightAmount', ReactTextType::class)
            ->add('billNum', ReactHiddenType::class, ['data' => ' ']);
        if ($options['request'] == true) {
            $builder->add('land_id', IntegerType::class);
        } else {
            $choices = $this->landDB->listChoices();
            $builder->add(
                'land_id',
                ReactChoiceType::class,
                [
                    'choices' => $choices
                ]
            );
        }
    }
}
