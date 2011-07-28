<?php
class User_Model_Mailer
{
	
	public function sendRegistrationConfirmation(User_Model_User $user){
		$mail = new Zend_Mail();
		$mail->addTo($user->getEmail(), $user->getFname() . " " . $user->getLname());
		$mail->setFrom(Zend_Registry::get('config')->email.noreply, Zend_Registry::get('config')->email.reply.name);
		$mail->setSubject('Information regarding your new account at '. Zend_Registry::get('config')->site.name);
		Zend_Mail::setDefaultTransport(new Zend_Mail_Transport_Smtp('mail.jplesperance.me', array('auth'=>'login','username'=>'jesse','password'=>'Denise48')));
		$mail->setBodyHtml("Thank you for registering at " . Zend_Registry::get('config')->site.name .".</p>
		<p>To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:<br /><br />
		<a href='".Zend_Registry::get('config')->site->url."/activate/".$user->getId()."/".md5($user->getEmail())."'>Activate Account</a></p>
		<p>Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit our 
		<a href='".Zend_Registry::get('config')->site->url.">support site</a></p>");
		$mail->setBodyText("Thank you for registering at " . Zend_Registry::get('config')->site.name .".
		To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:
		".Zend_Registry::get('config')->site->url."/activate/".$user->getId()."/".md5($user->getEmail())."
		  Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit 
		".Zend_Registry::get('config')->site->url."/support");
		$mail->send();
	}
}
?>