<?php
/**
 * User
 * 
 * @author Jesse
 * @version 
 */
require_once 'Zend/Db/Table/Abstract.php';
class User_Model_DbTable_User extends Zend_Db_Table_Abstract
{
    /**
     * The default table name 
     */
    protected $_name = 'users';
}
