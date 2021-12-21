<?php
namespace App\Form\AccountManager;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

use App\Form\React\ReactForm;
use App\Form\React\ReactTextType;
use App\Form\React\ReactHiddenType;
use App\Form\React\ReactChoiceType;
use App\Form\React\ReactPasswordType;

use App\Entity\UACEntity;
use App\Entity\Land;

class Account extends ReactForm
{

    protected $uacDB;
    protected $landDB;
    protected $user;
    protected $encoder;

    public function __construct(UACEntity $uacDB, Land $landDB, TokenStorageInterface $tokenStorage, UserPasswordEncoderInterface $encoder)
    {
        $this->uacDB = $uacDB;
        $this->landDB = $landDB;
        $this->user = $tokenStorage->getToken()->getUser();
        $this->encoder = $encoder;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setRequired('createAccount')->setDefault('createAccount', false);
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('login', ReactTextType::class)
            ->add('id', ReactHiddenType::class);
        if ($options['createAccount'] == true) {
            $builder->add(
                'password',
                ReactPasswordType::class,
                [
                    'constraints' => [new NotBlank(['message' => 'account.errors.password_blank'])]
                ]
            );
            if ($options['request'] == true) {
                $passwordTransformer = new CallbackTransformer(
                    function ($value) {
                        return $value;
                    },
                    function ($value) {
                        return $value != '' ? $this->encoder->encodePassword($this->user, $value) : $value;
                    }
                );
                $builder->get('password')->addModelTransformer($passwordTransformer);
            }

        }
        if ($options['request'] == true) {
            $builder->add(
                'role_id',
                IntegerType::class
            )
            ->add(
                'land_ids',
                CollectionType::class,
                [
                    'entry_type' => IntegerType::class,
                    'allow_add' => true
                ]
            );
        } else {
            $builder->add(
                'role_id',
                ReactChoiceType::class,
                [
                    'choices' => $this->uacDB->roleChoices()
                ]
            )
            ->add(
                'land_ids',
                ReactChoiceType::class,
                [
                    'choices' => $this->landDB->listChoices(),
                    'expanded' => false,
                    'multiple' => true
                ]
            );
        }
    }
}
