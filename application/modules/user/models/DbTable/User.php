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
 * @subpackage Mail
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License
 * @version    0.2
 */
/**
 * The user table class
 *
 * @author Jesse P Lesperance <jesse@jplesperance.me?
 * @since 0.2
 */
class User_Model_DbTable_User extends Zend_Db_Table_Abstract
{
    /**
     * The default table name
     *
     * @var string $_name
     */
    protected $_name = 'users';
}
