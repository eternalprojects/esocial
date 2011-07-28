<?php
/**
 * RegisterController
 * 
 * @author
 * @version 
 */
require_once 'Zend/Controller/Action.php';
class User_RegisterController extends Zend_Controller_Action
{
    /**
     * The default action - show the home page
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
    
    public function successAction(){
        $this->view->data = "Great Job";
    }
}
