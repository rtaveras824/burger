CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers` (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`burger_name` VARCHAR(255) NOT NULL,
`devoured` TINYINT(1) NOT NULL DEFAULT 0,
`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);