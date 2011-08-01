<?php

class IndexControllerTest extends \Zend\Test\PHPUnit\ControllerTestCase
{

    public function setUp()
    {
        $this->bootstrap = new Zend\Application\Application(APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini');
        parent::setUp();
    }

    public function testIndexAction()
    {
        
        $this->dispatch('/index/index');
        
        // assertions
      
        $this->assertController('index');
        $this->assertAction('index');
        $this->assertQueryContentContains("div#welcome h3", "This is your project's main page");
    }


}



