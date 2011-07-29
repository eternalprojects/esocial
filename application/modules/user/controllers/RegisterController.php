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
 * The Registration Controller
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @uses Zend_Controller_Action
 */
class User_RegisterController extends Zend_Controller_Action
{
    /**
     * The default action - show the hregistration form
     */
    public function indexAction ()
    {
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/modules/user/forms/register.ini','register');
        $form = new Zend_Form($config->register);
        if($this->getRequest()->isPost()){
            if($form->isValid($this->getRequest()->getPost())){
                $user = new User_Model_User($form->getValues());
                $mapper = new User_Model_UserMapper();
                $bit = 0;
                if($mapper->checkUsername($user) == true){
                    $form->getElement('username')->addError('The username you provided is already in use');
                    $bit = 1;
                }
                if($mapper->checkEmail($user) == true){
                    $form->getElement('email')->addError('An account is already registered to the email address you provided');
                    $bit = 1;
                }
                
                if($bit == 1){
                    $this->view->form = $form;
                }else{
                    $mapper->save($user);
                    $this->_helper->redirector('success');
                }
            }else{
                $this->view->form = $form;
            }
        }else{
            $this->view->form = $form;
        }
        
    }
    /**
     * Display a message stating account registration was successful
     */
    public function successAction(){
        $this->view->data = "Great Job";
    }
}
