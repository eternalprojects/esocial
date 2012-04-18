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
     * @category     User
     * @package      Model
     * @subpackage   Mail
     * @copyright    Copyright (c) 2011 JPL Web Solutions
     * @author       Jesse P Lesperance <jesse@jplesperance.me>
     * @license      http://www.gnu.org/licenses/gpl.html GNU General Public License
     * @version      0.2
     */
    /**
     * The mailer class
     *
     * This class contains methods related to sending email for all the various
     * functionality of the User module.
     *
     * @author Jesse P Lesperance <jesse@jplesperance.me?
     * @since  0.2
     */
class User_Model_Mailer
{
    /**
     * Generate and send email regarding registration confirmation
     *
     * @param User_Model_User $user
     *
     * @static
     * @uses  Zend_Mail
     * @uses  Zend_Registry
     * @since 0.2
     */
    public static function sendRegistrationConfirmation(User_Model_User $user)
    {
        $mail = new Zend_Mail();
        $mail->addTo($user->getEmail(), $user->getFname() . " " . $user->getLname());
        $mail->setFrom(Zend_Registry::get('config')->email->noreply, Zend_Registry::get('config')->email->name);
        $mail->setSubject('Information regarding your new account at ' . Zend_Registry::get('config')->site->name);
        $mail->setBodyHtml(
            "Thank you for registering at " . Zend_Registry::get('config')->site->name . ".</p>
		<p>To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:<br /><br />
		<a href='" . Zend_Registry::get('config')->site->url . "/activate/" . $user->getId() . "/" . md5(
                $user->getEmail()
            ) . "'>Activate Account</a></p>
		<p>Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit our 
		<a href='" . Zend_Registry::get('config')->site->url . ">support site</a></p>"
        );
        $mail->setBodyText(
            "Thank you for registering at " . Zend_Registry::get('config')->site->name . ".
		To login in to your new account, we just need you to verify your email address and activate your account, 
		which can be done my clicking on the link below:
		" . Zend_Registry::get('config')->site->url . "/activate/" . $user->getId() . "/" . md5($user->getEmail()) . "
		  Please do not reply to this email, as it is an automated response.  If you have any questions and/or issues, please visit 
		" . Zend_Registry::get('config')->site->url . "/support"
        );
        $mail->send();
    }

    /**
     * Generate and send email regarding registration confirmation
     *
     * @param User_Model_User $user
     *
     * @static
     * @uses  Zend_Mail
     * @uses  Zend_Registry
     * @since 0.2
     */
    public static function sendUsername(User_Model_User $user)
    {

        //Create an instance of Zend Mail and set the header info
        $mail = new Zend_Mail();
        $mail->addTo($user->getEmail(), $user->getFname() . " " . $user->getLname());
        $mail->setFrom(Zend_Registry::get('config')->email->noreply, Zend_Registry::get('config')->email->name);
        $mail->setSubject('Information regarding your new account at ' . Zend_Registry::get('config')->site->name);

        // Create the HTML version of the message body
        $mail->setBodyHtml(
            "<p>You are receiving this email becausesomeone claiming to be the account owner has requested
        to have the account username emailed.  If this request was not made by you please immediately login to your account a
        nd change your password.</p>
        <p>Username: " . $user->getUsername() . "</p>
        <p>This is an automated message.  Please Do Not Reply to this email.  If you require assistance, please contact
        us at " . Zend_Registry::get('config')->site->support . "</p>"
        );

        // Create a Text version of the message body
        $mail->setBodyText("Thank you for registering at  " . Zend_Registry::get('config')->site->name . " To login to your new account, we just need you to verify your email address and activate your account,
		which can be done my clicking on the link below:
		" . Zend_Registry::get('config')->site->url . " / activate / " . $user->getId() . "
            / " . md5($user->getEmail()) . "
		  Please do not reply to this email, as it is an automated response .  If you have any questions and/or issues, please email "
            . Zend_Registry::get('config')->site->url ."."
        );

        // Send the email
        $mail->send();
    }
}

?>
