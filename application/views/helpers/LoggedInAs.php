<?php
/**
 *
 * @author jesse
 * @version 
 */
require_once 'Zend/View/Interface.php';
/**
 * LoggedInAs helper
 *
 * @uses viewHelper Zend_View_Helper
 */
class Zend_View_Helper_LoggedInAs
{
    /**
     * @var Zend_View_Interface 
     */
    public $view;
    /**
     * 
     */
    public function loggedInAs ()
    {
        $auth = Zend_Auth::getInstance();
        if($auth->hasIdentity()){
        		$username = $auth->getIdentity()->username;
        		$logoutUrl = $this->view->url(array('module'=>'user', 'controller'=>'auth','action'=>'logout'), null, true);
        		return 'Welcome '. $username .' <a href="'.$logoutUrl.'">Logout</a>';
        }
        $request = Zend_Controller_Front::getInstance()->getRequest();
        $controller = $request->getControllerName();
        $action = $request->getActionName();
        $module = $request->getModuleName();
        if($module == 'user' && $controller == 'auth' && $action == 'login'){
        		return '';
        }
        $loginUrl = $this->view->url(array('module'=>'user', 'controller'=>'auth', 'action'=>'login'), null, false);
        return '<a href="'.$loginUrl.'">Login</a>';
        return null;
    }
    /**
     * Sets the view field 
     * @param $view Zend_View_Interface
     */
    public function setView (Zend_View_Interface $view)
    {
        $this->view = $view;
    }
}
