<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	protected final function _initConfig()
    {
        $config = new Zend_Config($this->getOptions());
        Zend_Registry::set('config', $config);
        return $config;
    }
	
	protected final function _initView()
    {
        // Initialize view
        $view = new Zend_View();
        $view->doctype('XHTML1_STRICT');
        
 
        // Add it to the ViewRenderer
        $viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper(
            'ViewRenderer'
        );
        $viewRenderer->setView($view);
 
        // Return it, so that it can be stored by the bootstrap
        return $view;
    }
    
    public function _initRoutes(){
        $front = Zend_Controller_Front::getInstance();
        $router = new Zend_Controller_Router_Rewrite();
        $routes = new Zend_Config_Ini(APPLICATION_PATH .'/configs/routes.ini','routes');
        $router->addConfig($routes, 'routes');
        $front->setRouter($router);
    }

}

