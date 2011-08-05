<?php
require_once ('Zend/Acl.php');
class Default_Model_Acl extends Zend_Acl
{
	const ROLE_GUEST = 'guest';
	const ROLE_USER = 'user';
	const ROLE_ADMIN = 'admin';
	
	protected static $_instance;
	
	protected function __construct(){
		$this->addRole(New Zend_Acl_Role(self::ROLE_GUEST));
		$this->addRole(new Zend_Acl_Role(self::ROLE_USER), self::ROLE_GUEST);
		$this->addRole(new Zend_Acl_Role(self::ROLE_ADMIN), self::ROLE_USER);
		
		$this->allow(self::ROLE_ADMIN);
		
		$moduleResource = new Zend_Acl_Resource('user');
		$this->add($moduleResource)
			->add(new Zend_Acl_Resource('user.register'), $moduleResource)
			->add(new Zend_Acl_Resource('user.auth'), $moduleResource)
			->add(new Zend_Acl_Resource('default'))
			->add(new Zend_Acl_Resource('default.index'), 'default')
			->add(new Zend_Acl_Resource('default.error'), 'default');
		$this->deny('guest');	
		$this->allow('guest', 'user.register');
		$this->allow('guest', 'user.auth', array('login'));
		$this->deny('user', 'user.register');
		$this->allow('user', 'user.auth', array('logout'));
		$this->deny('user', 'user.auth', array('login'));
		
		return $this;
	}
	
	protected static $_user;
	
	public static function setUser(User_Model_User $user = null){
		if(null === $user){
			throw new InvalidArgumentException("$user is null");
		}
		self::$_user = $user;
	}
	
	public static function getInstance(){
		if(null === self::$_instance){
			self::$_instance = new Self();
		}
		return self::$_instance;
	}
	
	public static function resetInstance(){
		self::$_instance = null;
		self::getInstance();
	}
	
}
?>