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
 * @package    Authentication
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
/**
 * The Authentication Controller
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @uses Zend_Controller_Action
 */
class User_AuthController extends Zend_Controller_Action
{
	public function indexAction(){
		$this->_redirect('/');
	}
	
	public function loginAction(){
		
		$db = $this->_getParam('db');
		$forms = new Zend_Config_Ini(APPLICATION_PATH . '/modules/user/forms/register.ini', 'login');
		$form = new Zend_Form($forms);
		if($this->getRequest()->isPost()){
			if($form->isValid($_POST)){
				/* $mapper = new User_Model_UserMapper();
				try{
					$user = 	$mapper->login($form->getValue('username'), $form->getValue('password'));
					$this->_redirect('/');
				}catch (Exception $e){
					$this->view->messages = $e->getMessage();
					$this->view->loginForm = $form;
				}
			}else{
				$this->view->loginForm = $form;
				$this->view->messages = "Please correct the errors below"; */
				$adapter = new Zend_Auth_Adapter_DbTable(
					$db,
					'users',
					'username',
					'password',
					'active = 1');
				$adapter->setIdentity($form->getValue('username'));
				$adapter->setCredential(md5($form->getValue('password')));
				$auth = Zend_Auth::getInstance();
				$result = $auth->authenticate($adapter);
				if($result->isValid()){
					$this->_helper->flashMessenger('Login Successful');
					$user = $adapter->getResultRowObject();
					try{
					    print_r($user->id);
					    exit;
						$auth->getStorage()->write($user['id']);
					}catch(Zend_Auth_Storage_Exception $e){
						error_log($e->getMessage());
						$this->view->messages = "Login Failed";
						$this->view->loginForm = $form;
					}
					$this->_redirect('/');
					return;
				}else{
					$this->view->messages = "Login Failed";
					$this->view->loginForm = $form;
				}
			}
		}else{
			$this->view->messages = "Please Login";
			$this->view->loginForm = $form;
		}
	}
	
	public function logoutAction(){
		Zend_Auth::getInstance()->clearIdentity();
		$this->_redirect('/');
	}
}