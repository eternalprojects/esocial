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
 * @package      ForgottenCreds
 * @copyright    Copyright (c) 2011-2012 JPL Web Solutions
 * @author       Jesse P Lesperance <jesse@jplesperance.me>
 * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version      0.2
 */
/**
 * The Forgotten Credential Controller
 *
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since  0.2
 * @uses   Zend_Controller_Action
 */
class User_ForgotController extends Zend_Controller_Action
{
    final public function indexAction()
    {
        return $this->_redirect('/');
    }

    final public function usernameAction()
    {
        if ($this->getRequest()->getParam('submit') == 'Get Username') {
            $user = new User_Model_User();
            $user = $user->findByEmail($this->getRequest()->getParam('email'));
            if ($user->getId() == 0) {
                $this->_forward('incorrectemail', null, null, array('email'=> $this->getRequest()->getParam('email')));
                return;
            }
            User_Model_Mailer::sendUsername($user);
            $this->_forward('unamesent', null, null, array('email'=> $user->getEmail()));
            return;
        }

    }

    public function incorrectemailAction()
    {
        $this->view->email = $this->getRequest()->getParam('email');
    }

    public function unamesentAction()
    {
        $this->view->email = $this->getRequest()->getParam('email');
    }

    public function nouserAction()
    {

    }

    public function passwordAction()
    {
        if ($this->getRequest()->getParam('submit') == 'Reset') {
            $user = new User_Model_User();
            $user = $user->findByEmailUname(
                $this->getRequest()->getParam('uname'), $this->getRequest()->getParam('email')
            );
            if ($user->getId() == 0) {
                $this->_forward('nouser', null, null, array('email'   => $this->_request->getParam('email'),
                                                            'username'=> $this->_request->getParam('username')
                    )
                );
                exit;
            }
            $user->generatePassword();
            User_Model_Mailer::sendPassword($user);
            return;

        }
    }
}