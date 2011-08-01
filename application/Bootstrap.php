<?php

class Bootstrap extends Zend\Application\Bootstrap
{
	protected final function _initConfig()
    {
        $config = new Zend\Config\Config($this->getOptions());
        Zend\Registry::set('config', $config);
        return $config;
    }
    
    public function _initRoutes(){
        $front = Zend\Controller\Front::getInstance();
        $router = new Zend\Controller\Router\Rewrite();
        $routes = new Zend\Config\Ini(APPLICATION_PATH .'/configs/routes.ini','routes');
        $router->addConfig($routes, 'routes');
        $front->setRouter($router);
    }

}

