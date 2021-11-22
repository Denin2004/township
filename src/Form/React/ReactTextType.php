<?php
namespace App\Form\React;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class ReactTextType extends AbstractType
{
    public function getParent()
    {
        return TextType::class;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        dump($view->vars);
        $view->parent->vars['react'][$view->vars['name']] = [
            'type' => 'mfw-text',
            'value' => $view->vars['value']
        ];
    }
}
