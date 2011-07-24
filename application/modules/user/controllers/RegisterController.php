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
                
            }else{
                $this->view->form = $form;
            }
        }
    }
}
