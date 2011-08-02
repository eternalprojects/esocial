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
 * along with this program. If not, see . 
 *
 * @category   User
 * @package    Model
 * @subpackage UserObject
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
/**
 * A class representation of a row from the users table
 * 
 * @author Jesse Lesperance
 * @since 0.2
 */
class User_Model_User
{
	/**
	 * The user id
	 * 
	 * @var int
	 */
    protected $_id;
    /**
     * The user's first name
     * 
     * @var string
     */
    protected $_fname;
    /**
     * The user's last name
     * 
     * @var string
     */
    protected $_lname;
    /**
     * The user's username
     * 
     * @var string
     */
    protected $_username;
    /**
     * The user's password
     * 
     * @var string
     */
    protected $_password;
    /**
     * The user's email address
     *
     * @var string
     */
    protected $_email;
    /**
     * The user's date of birth
     * 
     * @var date
     */
    protected $_dob;
    /**
     * Whether the user's account is activated
     * 
     * @var int 0|1
     */
    protected $_active;
    /**
     * The date of the users last login
     * 
     * @var datetime
     */
    protected $_lastLogin;
    /**
     * The class constructor
     * 
     * @param array $options
     * @final
     * @return void
     */
    final public function __construct(array $options = null){
        if(is_array($options)){
            $this->setOptions($options);
        }
    }
    /**
     * The magic set method
     * 
     * @param string $name
     * @param mixed $value
     * @throws Exception
     * @return void
     */
    final public function __set($name, $value){
        $method = 'set' . ucfirst($name);
        if(('mapper' == $name) || !method_exists($this, $method)){
            throw new Exception('Invalid user entry');
        }
        $this->$method($value);
    }
    /**
     * The magid get method
     * 
     * @param string $name
     * @throws Exception
     * @return mixed
     * @final
     */
    final public function __get($name){
        $method = 'get' . ucfirst($name);
        if(('mapper' == $name) || !method_exists($this, $method)){
            throw new Exception('Invalid user entry');
        }
        return $this->method();
    }
    
    final public function setOptions(array $options){
        $methods = get_class_methods($this);
        foreach($options as $key=>$value){
            $method = 'set' . ucfirst($key);
            if(in_array($method, $methods)){
                $this->$method($value);
            }
        }
        return $this;
    }
	/**
     * @return the $_id
     */
    public function getId ()
    {
        return $this->_id;
    }

	/**
     * @return the $_fname
     */
    public function getFname ()
    {
        return $this->_fname;
    }

	/**
     * @return the $_lname
     */
    public function getLname ()
    {
        return $this->_lname;
    }

	/**
     * @return the $_username
     */
    public function getUsername ()
    {
        return $this->_username;
    }

	/**
     * @return the $_password
     */
    public function getPassword ()
    {
        return $this->_password;
    }

	/**
     * @return the $_email
     */
    public function getEmail ()
    {
        return $this->_email;
    }

	/**
     * @return the $_dob
     */
    public function getDob ()
    {
        return $this->_dob;
    }

	/**
     * @return the $_active
     */
    public function getActive ()
    {
        return $this->_active;
    }

	/**
     * @return the $_lastLogin
     */
    public function getLastLogin ()
    {
        return $this->_lastLogin;
    }

	/**
     * @param field_type $_id
     */
    public function setId ($_id)
    {
        $this->_id = $_id;
    }

	/**
     * @param field_type $_fname
     */
    public function setFname ($_fname)
    {
        $this->_fname = $_fname;
    }

	/**
     * @param field_type $_lname
     */
    public function setLname ($_lname)
    {
        $this->_lname = $_lname;
    }

	/**
     * @param field_type $_username
     */
    public function setUsername ($_username)
    {
        $this->_username = $_username;
    }

	/**
     * @param field_type $_password
     */
    public function setPassword ($_password)
    {
        $this->_password = $_password;
    }

	/**
     * @param field_type $_email
     */
    public function setEmail ($_email)
    {
        $this->_email = $_email;
    }

	/**
     * @param field_type $_dob
     */
    public function setDob ($_dob)
    {
        $this->_dob = $_dob;
    }

	/**
     * @param field_type $_active
     */
    public function setActive ($_active)
    {
        $this->_active = $_active;
    }

	/**
     * @param field_type $_lastLogin
     */
    public function setLastLogin ($_lastLogin)
    {
        $this->_lastLogin = $_lastLogin;
    }

    
    
}
?>