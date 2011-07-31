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
        
        $this->dispatch('/register');
        
        // assertions
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction('index');
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQuery("form#register-form");
    }
    
    public function testFormError(){
        
        $this->getRequest()->setMethod('POST')->setPost(array('fname'=>'Jesse','lname'=>2));
        $this->dispatch('register');
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction(index);
        $this->assertNotRedirect();
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQueryContentContains('li', 'Only letters are allowed in the last name field');
        $this->assertQuery("form#register-form");
        $this->assertQuery('ul');
    }
    
    public function testSuccessfulRegister(){
       
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
        $this->dispatch('/register');
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction(index);
        $this->assertRedirect();
        
        $mapper = new User_Model_UserMapper();
        $res = $mapper->fetchAll();
        $this->assertGreaterThan(0, count($res));
        foreach ($res as $user){
            $this->assertInstanceOf('User_Model_User', $user);
            $this->assertEquals(0, $user->getActive());
            $this->assertEquals('0000-00-00 00:00:00', $user->getLastLogin());
            $this->assertEquals('jlswebdev', $user->getUsername());
            $num = $mapper->delete($user);
            $this->assertEquals(1, $num);
        }
    }
    
    public function testSuccessAction(){
    	
        $this->dispatch('/register/success');
        $this->assertQueryContentContains('h2', 'Great Job');
        $this->assertModule('user');
        $this->assertController(register);
        $this->assertAction(success);
        $this->assertNotRedirect();
    }
    
    public function testDuplicateUsername(){
    	$this->_insertTestUser();
    	
        $this->getRequest()
            ->setMethod('POST')
            ->setPost(
                array(
                	'fname'=>'Jesse',
                	'lname'=>'Lesperance',
                    'email'=>'jesse@jplesperance.me',
                    'username'=>'jlswebdev',
                    'password'=>'Password1',
                    'password2'=>'Password1',
                    'dob'=>'2000-01-01'
                )
            );
        $this->dispatch('/register');
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction('index');
        $this->assertNotRedirect();
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQueryContentContains('li', 'The username you provided is already in use');
        $this->assertQuery("form#register-form");
        $this->assertQuery('ul');
        $this->_wipeDb();
    }
    
    public function testDuplicateEmail(){
    	$this->_insertTestUser();
    	
        $this->getRequest()
            ->setMethod('POST')
            ->setPost(
                array(
                	'fname'=>'Jesse',
                	'lname'=>'Lesperance',
                    'email'=>'jesse@jplesperance.com',
                    'username'=>'jplesperance',
                    'password'=>'Password1',
                    'password2'=>'Password1',
                    'dob'=>'2000-01-01'
                )
            );
        $this->dispatch('/register');
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction('index');
        $this->assertNotRedirect();
        $this->assertQueryContentContains('h1', 'Create an account');
        $this->assertQueryContentContains('li', 'An account is already registered to the email address you provided');
        $this->assertQuery("form#register-form");
        $this->assertQuery('ul');
        $this->_wipeDb();
    }
    
    public function testActivationSuccess(){
        $this->_insertTestUser();
        $mapper = new User_Model_UserMapper();
        $entry = $mapper->fetchAll();
        $user = $entry[0];
        $this->assertEquals(0, $user->getActive());
        $url = "/activate/".$user->getId() ."/" . md5($user->getEmail());
        $this->dispatch($url);
        $this->assertModule('user');
        $this->assertController('register');
        $this->assertAction('activate');
        $this->assertEquals(1, $user->getActive());
        $this->assertRedirect();
        $this->assertRedirectTo('/activate/success');
        $this->_wipeDb();
    }
    
    private function _insertTestUser(){
    	$mapper = new User_Model_UserMapper();
    	$user = new User_Model_User(
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
        $mapper->save($user);
        return;
    }
    
    private function _wipeDb(){
    	$mapper = new User_Model_UserMapper();
    	$res = $mapper->fetchAll();
    	if(is_array($res) && count($res) > 0){
    		foreach ($res as $user){
    			$mapper->delete($user);
    		}
    	}
    	return;
    }


}