<?php
/**
 * Eternally Social
 *
 * LICENSE:
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see . 
 *
 * @category   User
 * @package    Model
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
/**
 * 
 * namespace
 *
 */
namespace User\Model;

use \User\Model\User,
    \Zend\Registry;
/**
 * The mailer class
 * 
 * This class contains methods related to sending email for all the various 
 * functionality of the User module.
 * 
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @category User
 * @package Model
 * @uses \User\Model\User
 * @uses \Zend\Registry
 * @uses \Zend\Mail
 */
class Mailer
{
	/**
	 * Generate and send email regarding registration confirmation
	 * 
	 * @param \User\Model\User $user
	 * @static
	 */
	public static function sendRegistrationConfirmation(User $user){
		$mail = new \Zend\Mail();
		$mail->addTo($user->getEmail(), $user->getFname() . " " . $user->getLname());
		$mail->setFrom(Registry::get('config')->email->noreply, Registry::get('config')->email->name);
		$mail->setSubject('Information regarding your new account at '. Registry::get('config')->site->name);
		$mail->setBodyHtml("Thank you for registering at " . Registry::get('config')->site->name .".</p>
		<p>To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:<br /><br />
		<a href='".Registry::get('config')->site->url."/activate/".$user->getId()."/".md5($user->getEmail())."'>Activate Account</a></p>
		<p>Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit our 
		<a href='".Registry::get('config')->site->url.">support site</a></p>");
		$mail->setBodyText("Thank you for registering at " . Registry::get('config')->site->name .".
		To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:
		".Registry::get('config')->site->url."/activate/".$user->getId()."/".md5($user->getEmail())."
		  Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit 
		".Registry::get('config')->site->url."/support");
		$mail->send();
	}
}
?>