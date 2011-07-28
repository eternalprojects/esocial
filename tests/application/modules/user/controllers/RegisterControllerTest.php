<?php

class User_RegisterControllerTest extends Zend_Test_PHPUnit_ControllerTestCase
{

    public function setUp()
    {
        $this->bootstrap = new Zend_Application(APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini');
        parent::setUp();
    }

    public function testFormGeneration()
    {
        $params = array('action' => 'index', 'controller' => 'Register', 'module' => 'user');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams);
        $this->dispatch($url);
        
        // assertions
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQuery("form#register-form");
    }
    
    public function testFormError(){
        $params = array('action'=>'index', 'controller'=>'register', 'module'=>'user');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams);
        $this->getRequest()->setMethod('POST')->setPost(array('fname'=>'Jesse','lname'=>'2'));
        $this->dispatch($url);
        
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertQuery('Only letters are allowed in the last name field');
    }


}