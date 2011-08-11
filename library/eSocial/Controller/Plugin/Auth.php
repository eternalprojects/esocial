<?php
require_once ('Zend/Controller/Plugin/Abstract.php');
class eSocial_Controller_Plugin_Auth extends Zend_Controller_Plugin_Abstract
{
	private $_identity;
	private $_acl;
	private $_noAcl = '/unauthorized';
	private $_noUser = '/login';
	
	public function preDispatch(Zend_Controller_Request_Abstract $request){
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
	    $acl = Application_Model_Acl::getInstance();
    	Zend_View_Helper_Navigation_HelperAbstract::setDefaultAcl($acl);
    	Zend_View_Helper_Navigation_HelperAbstract::setDefaultRole(eSocial_Smapp::getCurrentUser()->getRole());
    	Zend_Registry::set('acl', $acl);
    	
	    $this->_identity = eSocial_Smapp::getCurrentUser();
		$this->_acl = Application_Model_Acl::getInstance();
		
		$role = $this->_identity->getRole();
		
		$module = $request->getModuleName();
		$controller = $request->getControllerName();
		$action = $request->getActionName();
		
		$moduleLevel = $module;
		$controllerLevel = $moduleLevel .'.' .$controller;
		$privelege = $action;
		
		if($this->_acl->has($controllerLevel)){
			$resource = $controllerLevel;
		}else{
			$resource = $moduleLevel;
		}
		
		if($module != 'default' && $controller != 'index'){
			if($this->_acl->has($resource) && !$this->_acl->isAllowed($role, $resource, $privelege)){
				if(!$this->_identity){
					$request->setModuleName('user');
					$request->setControllerName('auth');
					$request->setActionName('login');
				}else{
					$request->setModuleName('default');
					$request->setControllerName('error');
					$request->setActionName('unauthorized');
				}
				throw new Exception('Access denied. ' .$resource . ':'.$privelege.':' . $role);
			}
		}
	}
}
?>
