<?php
/**
 * Eternally Social
 *
 * LICENSE:
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. 
 *
 * @category   Application
 * @package    Bootstrap
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
/**
 * The Application Bootstrap class
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @uses Zend_Application_Bootstrap_Bootstrap
 */
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	/**
	 * Load the application ini settings into the Registry
	 * 
	 * @return Zend_Config
     * @uses Zend_Config
     * @uses Zend_Registry
	 */
	protected final function _initConfig()
    {
        $config = new Zend_Config($this->getOptions());
        Zend_Registry::set('config', $config);
        return $config;
    }
	/**
	 * 
	 * Load the View and set the doc type
	 * 
	 * @return Zend_View
     * @uses Zend_View
     * @uses Zend_Controller_Action_Helper
	 */
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
    /**
     * 
     * Load the custom defined routes
     *
     * @uses Zend_Controller_Front
     * @uses Zend_ControllerRouter_Rewrite
     * @uses Zend_Config_Ini
     */
    public function _initRoutes(){
        $front = Zend_Controller_Front::getInstance();
        $router = new Zend_Controller_Router_Rewrite();
        $routes = new Zend_Config_Ini(APPLICATION_PATH .'/configs/routes.ini','routes');
        $router->addConfig($routes, 'routes');
        $front->setRouter($router);
    }

}

