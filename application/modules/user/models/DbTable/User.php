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
 * @package    Registration
 * @copyright  Copyright (c) 2011 JPL Web Solutions
 * @author	   Jesse P Lesperance <jesse@jplesperance.me>
 * @license    http://www.gnu.org/licenses/gpl.html GNU General Public License 
 * @version    0.2
 */
namespace User\Model\DbTable;
/**
 * Opject representation of the users table;
 * 
 * @category   User
 * @package    Model
 * @subpackage DbTable
 * @author Jesse P Lesperance <jesse@jplesperance.me>
 * @since 0.2
 * @uses Zend_Db_Table_Abstract 
 */
class User extends Zend\Db\Table\AbstractTable
{
    /**
     * The default table name 
     * 
     * @var string $_name The name of the table the class represents
     */
    protected $_name = 'users';
    /**
     * 
     * Recognize and autoincrementing pr5imary key
     * @var boolean $_sequence
     */
    protected $_sequence = true;
}
