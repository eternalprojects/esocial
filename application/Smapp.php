<?php
require_once ('application/Bootstrap.php');
class Smapp extends Bootstrap
{
	protected $_currentUser;
	
    public function __construct ($application)
    {
    		parent::__construct($application);			
    }
    
    public static function setCurrentUser(User_Model_User $user){
    		self::$_currentUser = $user;
    }
    
    public static function getCurrentUser(){
    		if(null === self::$_currentUser){
    			self::setCurrentUser(new UserModel_user());
    		}
    		return self::$_currentUser;
    }
    
    public static function getCurrentUserId(){
    		$user = self::getCurrentUser();
    		return $user->getId();
    }
    
    
}
?>