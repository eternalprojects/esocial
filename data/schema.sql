-- Host: localhost
-- Generation Time: Jul 27, 2011 at 09:09 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `esocial`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(75) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `lname` varchar(75) NOT NULL,
  `dob` date NOT NULL,
  `active` set('0','1') NOT NULL DEFAULT '0',
  `signup_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `username` (`username`,`email`,`active`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='User info Table' AUTO_INCREMENT=1 ;