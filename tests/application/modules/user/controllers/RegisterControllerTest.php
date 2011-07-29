<?php

class User_RegisterControllerTest extends Zend_Test_PHPUnit_ControllerTestCase
{

    public function setUp()
    {
        
        parent::setUp();
    }
    
    public function tearDown() {
        $this->resetRequest();
        $this->resetResponse();
        parent::tearDown();
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
        $this->getRequest()->setMethod('POST')->setPost(array('fname'=>'Jesse','lname'=>2));
        $this->dispatch($url);
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertNotRedirect();
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQueryContentContains('li', 'Only letters are allowed in the last name field');
        $this->assertQuery("form#register-form");
        $this->assertQuery('ul');
    }
    
    public function testSuccessfulRegister(){
        $params = array('action'=>'index', 'controller'=>'register', 'module'=>'user');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams);
        $this->getRequest()
            ->setMethod('POST')
            ->setPost(
                array(
                	'fname'=>'Jesse',
                	'lname'=>'Lesperance',
                    'email'=>'jesse@jplesperance.com',
                    'username'=>'jlswebdev',
                    'password'=>'password',
                    'password2'=>'password',
                    'dob'=>'2000-01-01'
                )
            );
        $this->dispatch($url);
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $mapper = new User_Model_UserMapper();
        $res = $mapper->fetchAll();
        $this->assertEquals(1, count($results));
        foreach ($res as $user){
            $this->assertInstanceOf('User_Model_User', $user);
            $num = $mapper->delete($user);
            $this->assertEquals(1, $num);
        }
    }


}