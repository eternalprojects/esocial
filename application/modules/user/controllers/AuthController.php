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
				$mapper = new User_Model_UserMapper();
				try{
					$user = 	$mapper->login($form->getValue('username'), $form->getValue('password'));
					$this->view->messages = "Login Successful";
				}catch (Exception $e){
					$this->view->messages = $e->getMessage();
				}
				$this->view->render();
			}else{
				$this->view->loginForm = $form;
				$this->view->messages = "Please correct the errors below";
			}
		}else{
			$this->view->messages = "Please Login";
			$this->view->loginForm = $form;
		}
	}
}