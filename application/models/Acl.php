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
 * @category     Application
 * @package      Model
 * @subpackage   Acl
 * @copyright    Copyright (c) 2011-2012 JPL Web Solutions
 * @author       Jesse P Lesperance <jesse@jplesperance.me>
 * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version      0.2
 */
/**
 * The ACL Class
 *
 * This class defines the roles and resources.  This class also applies permissions to the application
 *
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since  0.2
 * @uses   Zend_Acl
 */
class Application_Model_Acl extends Zend_Acl
{

    const ROLE_GUEST = 'guest';

    const ROLE_USER  = 'user';
    const ROLE_ADMIN = 'admin';

    protected static $_instance;

    protected function __construct()
    {
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
        $this->allow('guest', 'user.auth', array('login', 'logout'));
        $this->deny('user', 'user.register');
        $this->allow('user', 'user.auth', array('logout'));
        $this->deny('user', 'user.auth', array('login'));

        return $this;
    }

    protected static $_user;

    public static function setUser(User_Model_User $user)
    {
        if ($user->getId() == 0) {
            throw new InvalidArgumentException("$user is null");
        }
        self::$_user = $user;
    }

    public static function getInstance()
    {
        if (null === self::$_instance) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public static function resetInstance()
    {
        self::$_instance = null;
        self::getInstance();
    }

}

?>
