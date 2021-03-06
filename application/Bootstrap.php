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
 * @category     Application
 * @package      Bootstrap
 * @copyright    Copyright (c) 2011 JPL Web Solutions
 * @author       Jesse P Lesperance <jesse@jplesperance.me>
 * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version      0.2
 */
require_once(APPLICATION_PATH . '/modules/user/models/User.php');
require_once(APPLICATION_PATH . '/modules/user/models/UserMapper.php');
/**
 * The Application Bootstrap class
 *
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since  0.2
 * @uses   Zend_Application_Bootstrap_Bootstrap
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

        $fc = Zend_Controller_Front::getInstance();
        $fc->registerPlugin(new eSocial_Controller_Plugin_Auth());
        return $config;
    }

    protected final function _initAutoload()
    {
        $autoloader = new Zend_Application_Module_Autoloader(array(
            'namespace' => 'Default',
            'basePath'  => dirname(__FILE__)
        ));
        return $autoloader;
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
        $view->doctype('HTML5');


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
    protected function _initRoutes()
    {
        $front  = Zend_Controller_Front::getInstance();
        $router = new Zend_Controller_Router_Rewrite();
        $routes = new Zend_Config_Ini(APPLICATION_PATH . '/configs/routes.ini', 'routes');
        $router->addConfig($routes, 'routes');
        $front->setRouter($router);
    }
    /**  Why did I comment this out?
    protected function _initUser(){
    $auth = Zend_Auth::getInstance();
    if($auth->hasIdentity()){
    $mapper = new User_Model_UserMapper();
    $user = new User_Model_User();
    $id = $auth->getStorage()->read();
    $user = $mapper->find($id, $user);
    $userLastAccess = $user->getLastLogin();
    if((time() - $userLastAccess) > 300){
    $date = new Zend_Date();
    $user->setLastLogin($date->toString('YYY-MM-dd HH:mm:ss'));
    $mapper->save($user);
    }
    eSocial_Smapp::setCurrentUser($user);
    }
    return eSocial_Smapp::getCurrentUser();
    }

    protected function _initAcl(){
    $acl = Application_Model_Acl::getInstance();
    Zend_View_Helper_Navigation_HelperAbstract::setDefaultAcl($acl);
    Zend_View_Helper_Navigation_HelperAbstract::setDefaultRole(eSocial_Smapp::getCurrentUser()->getRole());
    Zend_Registry::set('acl', $acl);
    return $acl;
    } 
     */
}

