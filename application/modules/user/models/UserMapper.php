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
 * @package    Registration
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
/**
 * The User mapper class
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * 
 */
class User_Model_UserMapper
{
	/**
	 * 
	 * Contains a refernece to the User_Model_DbTable_User class
	 * 
	 * @var User_Model_DbTable_User
	 */
    protected $_dbTable;
    /**
     * Set the DB Table to the appropriate class
     * 
     * @param string|User_Model_DbTable_User $dbTable
     * @throws Exception
     * @return $this
     * @uses Zend_Db_Table_Abstract
     */
    final public function setDbTable ($dbTable)
    {
        if (is_string($dbTable)) {
            $dbTable = new $dbTable();
        }
        if (! $dbTable instanceof Zend_Db_Table_Abstract) {
            throw new Exception('Invalid table data gateway provider');
        }
        $this->_dbTable = $dbTable;
        return $this;
    }
    /**
     * Retrieve the reference of the User_Model_DbTable_User class
     * 
     * @final
     * @return User_Model_DbTable_User
     */
    final public function getDbTable ()
    {
        if (null === $this->_dbTable) {
            $this->setDbTable('User_Model_DbTable_User');
        }
        return $this->_dbTable;
    }
    /**
     * Insert/Update a user record into the database
     * 
     * @final
     * @param User_Model_User $user
     * @return void
     */
    final public function save (User_Model_User $user)
    {
        $data = array('username' => $user->getUsername(), 
        'fname' => $user->getFname(), 'lname' => $user->getLname(), 
         'email' => $user->getEmail(), 
        'dob' => $user->getDob());
        if (0 == ($id = $user->getId())) {
            unset($data['id']);
            $data['password'] = md5($user->getPassword());
            $data['role'] = 'user';
            $id = $this->getDbTable()->insert($data);
            $user->setId($id);
        } else {
            $data['active'] = $user->getActive();
            $data['password'] = $user->getPassword();
            $data['role'] = $user->getRole();
            $this->getDbTable()->update($data, array('id' => $id));
        }
    }
    /**
     * Find a user by their user id
     * 
     * @param int $id
     * @param User_Model_User $user
     * @return User_Model_User
     */
    public function find ($id, User_Model_User $user)
    {
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return;
        }
        $row = $result->current();
        $user->setId($id);
        $user->setUsername($row->username);
        $user->setPassword($row->password);
        $user->setEmail($row->email);
        $user->setFname($row->fname);
        $user->setLname($row->lname);
        $user->setDob($row->dob);
        $user->setactive($row->active);
        $user->setLastLogin($row->last_login);
        $user->setRole($row->role);
            
    		return $user;
    }
    /**
     * Retrieve the records of all users
     * 
     * @return array
     */
    public function fetchAll ()
    {
        $resultSet = $this->getDbTable()->fetchAll();
        $entries = array();
        foreach ($resultSet as $row) {
            $entry = new User_Model_User();
            $entry->setId($row->id);
            $entry->setUsername($row->username);
            $entry->setPassword($row->password);
            $entry->setEmail($row->email);
            $entry->setFname($row->fname);
            $entry->setLname($row->lname);
            $entry->setDob($row->dob);
            $entry->setactive($row->active);
            $entry->setLastLogin($row->last_login);
            $entry->setRole($row->role);
            $entries[] = $entry;
        }
        return $entries;
    }
    /**
     * Delete a user from the database
     * 
     * @param User_Model_User $user
     * @return int
     */
    public final function delete (User_Model_User $user)
    {
        $table = $this->getDbTable();
        return $table->delete(
        $table->getAdapter()
            ->quoteInto('id = ?', $user->getId()));
    }
    /**
     * Check to see if the username is already in the database
     * 
     * @param User_Model_User $user
     * @return boolean
     */
    public function checkUsername (User_Model_User $user)
    {
        $table = $this->getDbTable();
        $select = $table->select()->where('username = ?', $user->getUsername());
        $result = $table->fetchRow($select);
        if (1 == count($result)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Check to see if the email address is already in the database
     * 
     * @param User_Model_User $user
     * @return boolean
     */
    public function checkEmail (User_Model_User $user)
    {
        $table = $this->getDbTable();
        $select = $table->select()->where('email = ?', $user->getEmail());
        $result = $table->fetchRow($select);
        if (1 == count($result)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Log the user into the system
     * 
     * @param string $username
     * @param string $password
     * @throws Exception
     * @return User_Model_User
     */
    public function login($username, $password){
    		$user = new User_Model_User();
    		$table = $this->getDbTable();
        $select = $table->select()->where('username = ?', $username)->where('password = ?', md5($password))->limit(1);
        if($row = $table->fetchRow($select)){
        		if($row->active != 1){
        			Throw new Exception('Account not activated');
        		}
        		$user->setId($row->id);
        		$user->setUsername($row->username);
        		$user->setPassword($row->password);
        		$user->setEmail($row->email);
        		$user->setFname($row->fname);
        		$user->setLname($row->lname);
        		$user->setDob($row->dob);
        		$user->setactive($row->active);
        		$user->setLastLogin($row->last_login);
        		$user->setRole($row->role);
        		return $user;
        }else{
        		throw new Exception('Invalid username/password combination');
        }
    }
}
