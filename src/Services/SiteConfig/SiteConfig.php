<?php
namespace App\Services\SiteConfig;

use Symfony\Component\HttpFoundation\RequestStack;

class SiteConfig
{
    protected $config = [];

    public function __construct($projectDir, RequestStack $requestStack, $defaultLocale)
    {
        $session = $requestStack->getSession();
        $locale = $session->get('_locale') ? $session->get('_locale') : $defaultLocale;
        $this->config = array_merge(
            json_decode(file_get_contents($projectDir.'/templates/config/site_config.json.twig'), true),
            json_decode(file_get_contents($projectDir.'/templates/config/site_config_'.$locale.'.json.twig'), true)
        );
        $decimals = $this->config['numeral']['decimals'] != 0 ? '.'.str_repeat('0', $this->config['numeral']['decimals']) : '';
        if ($this->config['numeral']['thousandSeparator'] == '') {
            $this->config['js_number_format'] = '0';
            $this->config['js_int_format'] = '0';
        } else {
            $this->config['js_number_format'] = '0,0'.$decimals;
            $this->config['js_int_format'] = '0,0';
        }
    }

    public function get($name)
    {
        return isset($this->config[$name]) ? $this->config[$name] : '';
    }
}
