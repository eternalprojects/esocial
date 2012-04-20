<?php

class IndexControllerTest extends Zend_Test_PHPUnit_ControllerTestCase
{

    public function setUp()
    {
        $this->bootstrap = new Zend_Application(APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini');
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



