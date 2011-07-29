<?php

class User_RegisterControllerTest extends Zend_Test_PHPUnit_ControllerTestCase
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
                    'password'=>'Password1',
                    'password2'=>'Password1',
                    'dob'=>'2000-01-01'
                )
            );
        $this->dispatch($url);
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertRedirect();
        
        $mapper = new User_Model_UserMapper();
        $res = $mapper->fetchAll();
        $this->assertGreaterThan(0, count($res));
        foreach ($res as $user){
            $this->assertInstanceOf('User_Model_User', $user);
            $this->assertEquals(0, $user->getActive());
            $this->assertEquals('0000-00-00 00:00:00', $user->getLastLogin());
            $this->assertEquals('jlswebdev', $this->getUsername);
            $num = $mapper->delete($user);
            $this->assertEquals(1, $num);
        }
    }
    
    public function testSuccessAction(){
    	$params = array('action'=>'success', 'controller'=>'register', 'module'=>'user');
        $urlParams = $this->urlizeOptions($params);
        $url = $this->url($urlParams);
        $this->dispatch($url);
        $this->assertQueryContentContains('h2', 'Great Job');
        $this->assertModule($urlParams['module']);
        $this->assertController($urlParams['controller']);
        $this->assertAction($urlParams['action']);
        $this->assertNotRedirect();
    }


}