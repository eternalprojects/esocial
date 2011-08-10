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
require_once (APPLICATION_PATH .'/Bootstrap.php');
/**
 * The Application Bootstrap class
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @uses Bootstrap
 */
class eSocial_Smapp extends Bootstrap
{
	/**
	 * The currently logged in user
	 * 
	 * Whether a user is logged in or not, this object will exist.  If the user is 
	 * not logged in the value of User_Model_User::$_id will be 0
	 * 
	 * @see User_Model_User::$_id
	 * @var User_Model_User
	 */
	protected $_currentUser;
	/**
	 * The default class constructor
	 * 
	 * @param Zend_Application $application
	 */
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