<?php
class User_Model_UserMapper
{
    protected $_dbTable;
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
    final public function getDbTable ()
    {
        if (null === $this->_dbTable) {
            $this->setDbTable('User_Model_DbTable_User');
        }
        return $this->_dbTable;
    }
    final public function save (User_Model_User $user)
    {
        $data = array('username' => $user->getUsername(), 
        'fname' => $user->getFname(), 'lname' => $user->getLname(), 
        'password' => md5($user->getPassword()), 'email' => $user->getEmail(), 
        'dob' => $user->getDob());
        if (null === ($id = $user->getId())) {
            unset($data['id']);
            $this->getDbTable()->insert($data);
        } else {
            $data['active'] = $user->getActive();
            $this->getDbTable()->update($data, array('id' => $id));
        }
    }
    public function find ($id, User_Model_User $user)
    {
        $result = $this->getDbTable()->find($id);
        if (0 == count($result)) {
            return;
        }
        $row = $result->current();
        $user->setId($id)
            ->setUsername($row->username)
            ->setPassword($row->password)
            ->setEmail($row->email)
            ->setFname($row->fname)
            ->setLname($row->lanme)
            ->setDob($row->dob)
            ->setactive($row->active)
            ->setLastLogin($row->last_login);
    }
    public function fetchAll ()
    {
        $resultSet = $this->getDbTable()->fetchAll();
        $entries = array();
        foreach($resultSet as $row){
            $entry = new User_Model_User();
            $entry->setId($row->id)
                ->setUsername($row->username)
                ->setPassword($row->password)
                ->setEmail($row->email)
                ->setFname($row->fname)
                ->setLname($row->lanme)
                ->setDob($row->dob)
                ->setactive($row->active)
                ->setLastLogin($row->last_login);
            $entries[] = $entry;
        }
        return $entries;
    }
    
    public function checkUsername(User_Model_User $user){
        $table = $this->getDbTable();
        $select = $table->select()->where('username = ?', $user->getUsername());
        $result = $table->fetchRow($select);
        if(1 == count($result)){
            return true;
        }else{
            return false;
        }
    }
    
    public function checkEmail(User_Model_User $user){
    $table = $this->getDbTable();
        $select = $table->select()->where('email = ?', $user->getEmail());
        $result = $table->fetchRow($select);
        if(1 == count($result)){
            return true;
        }else{
            return false;
        }
    }
}
?>