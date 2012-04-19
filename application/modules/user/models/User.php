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
 * @category     User
 * @package      Model
 * @subpackage   UserObject
 * @copyright    Copyright (c) 2011 JPL Web Solutions
 * @author       Jesse P Lesperance <jesse@jplesperance.me>
 * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version      0.2
 */
/**
 * A class representation of a row from the users table
 *
 * @author Jesse Lesperance
 * @since  0.2
 */
class User_Model_User
{
    /**
     * The user id
     *
     * @var int
     */
    protected $_id = 0;
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
     * The role of the user
     *
     * @var string
     */
    protected $_role = 'guest';
    /**
     * The User Mapper Class
     *
     * @var User_Model_UserMapper
     */
    private $_mapper;

    /**
     * The class constructor
     *
     * @param array $options
     *
     * @final
     * @return \User_Model_User
     */
    final public function __construct(array $options = null)
    {
        if (is_array($options)) {
            $this->setOptions($options);
        }

        $this->_mapper = new User_Model_UserMapper();
    }

    /**
     * The magic set method
     *
     * @param string $name
     * @param mixed  $value
     *
     * @throws Exception
     * @return void
     */
    final public function __set($name, $value)
    {
        $method = 'set' . ucfirst($name);
        if (('mapper' == $name) || !method_exists($this, $method)) {
            throw new Exception('Invalid user entry');
        }
        $this->$method($value);
    }

    /**
     * The magic get method
     *
     * @param string $name
     *
     * @throws Exception
     * @return mixed
     * @final
     */
    final public function __get($name)
    {
        $method = 'get' . ucfirst($name);
        if (('mapper' == $name) || !method_exists($this, $method)) {
            throw new Exception('Invalid user entry');
        }
        return $this->method();
    }

    /**
     * This will determin if valid options are being passed
     *
     * @param array $options
     *
     * @return User_Model_User
     * @final
     */
    final public function setOptions(array $options)
    {
        $methods = get_class_methods($this);
        foreach (
            $options as $key=> $value
        ) {
            $method = 'set' . ucfirst($key);
            if (in_array($method, $methods)) {
                $this->$method($value);
            }
        }
        return $this;
    }

    /**
     * Retrieve the ID of the user
     *
     * @return int $_id
     */
    public function getId()
    {
        return $this->_id;
    }

    /**
     * @return string $_fname
     */
    public function getFname()
    {
        return $this->_fname;
    }

    /**
     * @return string $_lname
     */
    public function getLname()
    {
        return $this->_lname;
    }

    /**
     * @return string $_username
     */
    public function getUsername()
    {
        return $this->_username;
    }

    /**
     * @return string $_password
     */
    public function getPassword()
    {
        return $this->_password;
    }

    /**
     * @return string $_email
     */
    public function getEmail()
    {
        return $this->_email;
    }

    /**
     * @return date $_dob
     */
    public function getDob()
    {
        return $this->_dob;
    }

    /**
     * @return int $_active
     */
    public function getActive()
    {
        return $this->_active;
    }

    /**
     * @return string $_lastLogin
     */
    public function getLastLogin()
    {
        return $this->_lastLogin;
    }

    /**
     *
     * Return the users role
     *
     * @return string $_role
     */
    public function getRole()
    {
        return $this->_role;
    }

    /**
     * @param int $_id
     */
    public function setId($_id)
    {
        $this->_id = $_id;
    }

    /**
     * @param string $_fname
     */
    public function setFname($_fname)
    {
        $this->_fname = $_fname;
    }

    /**
     * @param string $_lname
     */
    public function setLname($_lname)
    {
        $this->_lname = $_lname;
    }

    /**
     * @param string $_username
     */
    public function setUsername($_username)
    {
        $this->_username = $_username;
    }

    /**
     * @param string $_password
     */
    public function setPassword($_password)
    {
        $this->_password = $_password;
    }

    /**
     * @param string $_email
     */
    public function setEmail($_email)
    {
        $this->_email = $_email;
    }

    /**
     * @param string $_dob
     */
    public function setDob($_dob)
    {
        $this->_dob = $_dob;
    }

    /**
     * @param int $_active
     */
    public function setActive($_active)
    {
        $this->_active = $_active;
    }

    /**
     * @param string $_lastLogin
     */
    public function setLastLogin($_lastLogin)
    {
        $this->_lastLogin = $_lastLogin;
    }

    /**
     *
     * @param string $role
     */
    public function setRole($role)
    {
        $this->_role = $role;
    }

    /**
     * Save the user object to the database
     *
     * @return boolean
     */
    public function save()
    {
        return $this->_mapper->save($this);
    }

    /**
     * Locate a user by their user id
     *
     * @param $id
     *
     * @return User_Model_User
     */
    public function find($id)
    {
        return $this->_mapper->find($id, $this);
    }

    /**
     *
     * Fetch all the Users in the database
     *
     * @return array
     */
    public function fetchAll()
    {
        return $this->_mapper->fetchAll();
    }

    /**
     * @return int
     */
    public function delete()
    {
        return $this->_mapper->delete($this);
    }

    /**
     * @return bool
     */
    public function checkUsername()
    {
        return $this->_mapper->checkUsername($this);
    }

    /**
     * @return bool
     */
    public function checkEmail()
    {
        return $this->_mapper->checkEmail($this);
    }

    public function findByEmail($email)
    {
        return $this->_mapper->findByEmail($email, $this);
    }

    public function findByEmailUname($username, $email)
    {
        return $this->_mapper->findByEmailUname($email, $username, $this);
    }

    function generatePassword($length = 9, $strength = 4)
    {
        $vowels     = 'aeuy';
        $consonants = 'bdghjmnpqrstvz';
        if ($strength & 1) {
            $consonants .= 'BDGHJLMNPQRSTVWXZ';
        }
        if ($strength & 2) {
            $vowels .= "AEUY";
        }
        if ($strength & 4) {
            $consonants .= '23456789';
        }
        if ($strength & 8) {
            $consonants .= '@#$%';
        }

        $password = '';
        $alt      = time() % 2;
        for (
            $i = 0; $i < $length; $i++
        ) {
            if ($alt == 1) {
                $password .= $consonants[(rand() % strlen($consonants))];
                $alt = 0;
            } else {
                $password .= $vowels[(rand() % strlen($vowels))];
                $alt = 1;
            }
        }
        $this->_password = $password;
        return;
    }


}
