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
 * @package      Authentication
 * @copyright    Copyright (c) 2011 JPL Web Solutions
 * @author       Jesse P Lesperance <jesse@jplesperance.me>
 * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version      0.2
 */
/**
 * The Authentication Controller
 *
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since  0.2
 * @uses   Zend_Controller_Action
 */
class User_AuthController extends Zend_Controller_Action
{
    /**
     * @return mixed
     */
    public function indexAction()
    {
        $this->_redirect('/');

    }

    public function loginAction()
    {

        $db    = $this->_getParam('db');
        $forms = new Zend_Config_Ini(APPLICATION_PATH . '/modules/user/forms/register.ini', 'login');
        $form  = new Zend_Form($forms);
        if ($this->getRequest()->getParam('submit') == 'Register') {
            if ($form->isValid($_POST)) {
                $adapter = new Zend_Auth_Adapter_DbTable(
                    $db,
                    'users',
                    'username',
                    'password',
                    'active = 1');
                $adapter->setIdentity($form->getValue('username'));
                $adapter->setCredential(md5($form->getValue('password')));
                $auth   = Zend_Auth::getInstance();
                $result = $auth->authenticate($adapter);
                if ($result->isValid()) {
                    $user = $adapter->getResultRowObject();
                    try {
                        $auth->getStorage()->write($user);
                    } catch (Zend_Auth_Storage_Exception $e) {
                        error_log($e->getMessage());
                        $this->view->messages  = "Login Failed";
                        $this->view->loginForm = $form;
                    }
                    $this->_redirect('/');
                    return;
                } else {
                    $adapter = new Zend_Auth_Adapter_DbTable(
                        $db,
                        'users',
                        'username',
                        'password',
                        'active = 1');
                    $adapter->setIdentity($form->getValue('username'));
                    $adapter->setCredential(md5($form->getValue('password')));
                    $auth   = Zend_Auth::getInstance();
                    $result = $auth->authenticate($adapter);
                    if ($result->isValid()) {
                        $this->_redirect('/user/notactivated');
                        return;
                    } else {
                        $this->view->messages  = "Login Failed";
                        $this->view->loginForm = $form;
                    }
                }
            }
        } else {
            $this->view->messages  = "Please Login";
            $this->view->loginForm = $form;
        }
    }

    public function logoutAction()
    {
        Zend_Auth::getInstance()->clearIdentity();
        return $this->_redirect('/');
    }

    public function changepasswordAction()
    {
        $user = new User_Model_User();
        $user = $user->find($this->_request->getParam('id'));
        if ($this->getRequest()->getParam('submit') == 'Change Password') {
            $user = new User_Model_User();
            $user = $user->find($this->_request->getParam('id'));
            $user->setPassword($this->_request->getParam('password'));
            $user->save();

        } else {
            return $this->_redirect('/');
        }
    }
}
