<?php

class User_AuthControllerTest extends Zend_Test_PHPUnit_ControllerTestCase
{

    public function setUp()
    {
        $this->application = new Zend_Application(APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini');
        $this->application->bootstrap();
        $this->getFrontController()->setParam('bootstrap', $this->application->getBootstrap());
        
       
    }
    
    public function tearDown() {
        $this->resetRequest();
        $this->resetResponse();
        parent::tearDown();
    }

    public function testAuthIndexRedirect(){
    		$this->dispatch('/user/auth/index');
    }
}
