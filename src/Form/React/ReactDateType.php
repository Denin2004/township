<?php
namespace App\Form\React;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\Validator\Constraints\Callback;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\CallbackTransformer;

use App\Services\SiteConfig\SiteConfig;

class ReactDateType extends AbstractType
{
    private $siteConfig;

    public function __construct(SiteConfig $config)
    {
        $this->siteConfig = $config;
    }

    public function getParent()
    {
        return TextType::class;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->addModelTransformer(new CallbackTransformer(
            function ($value) {
                return $value;
            },
            function ($value) {
                $dt = new \DateTime($value);
                $value = !$dt ? $value : $dt->format($this->siteConfig->get('php_date_format'));
                return $value;
            }
        ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'constraints' => [ new Callback(['callback' => [$this, 'checkDate']])],
            'request' => false,
            'compound' => true
        ]);
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->parent->vars['react'][$view->vars['name']] = [
            'type' => 'mfw-date',
            'value' => $view->vars['value'],
            'full_name' => $view->vars['full_name']
        ];
    }

    public function checkDate($value, ExecutionContextInterface $context)
    {
        $dt = new \DateTime($value);
        if (!$dt) {
            $context->buildViolation('calendar.errors.date_format')->addViolation();
            return;
        }
        return;
    }
}
