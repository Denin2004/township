<?php
namespace App\Form\React;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class ReactChoiceType extends AbstractType
{
    public function getParent()
    {
        return ChoiceType::class;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $choices = $form->getConfig()->getOption('choices');
        $reactChoices = [];
        foreach ($choices as $label => $value) {
            $reactChoices[] = [
                'label' => $label,
                'value' => $value
            ];
        }
        $view->parent->vars['react'][$view->vars['name']] = [
            'type' => 'mfw-choice',
            'choices' => $reactChoices,
            'value' => $view->vars['value'],
            'multiple' => isset($options['multiple']) ? $options['multiple'] : false
        ];
    }
}
