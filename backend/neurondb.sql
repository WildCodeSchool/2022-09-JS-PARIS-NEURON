-- MySQL Script generated by MySQL Workbench
-- mar. 27 sept. 2022 15:11:55
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema neuron
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema neuron
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `neuron` ;
USE `neuron` ;

-- -----------------------------------------------------
-- Table `neuron`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`categories` ;

CREATE TABLE IF NOT EXISTS `neuron`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`users` ;

CREATE TABLE IF NOT EXISTS `neuron`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(70) NOT NULL,
  `hashedpassword` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(70) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `status` TINYINT(1) NOT NULL,
  `chat_id` VARCHAR(45) NOT NULL,
  `fav_tag` INT NULL,
  `fav_users` INT NULL,
  `fav_topic` INT NULL,
  `image_avatar` BLOB NULL,
  `linkedin` VARCHAR(255) NULL,
  `github` VARCHAR(255) NULL,
  `description` VARCHAR(8000) NULL,
  `color_mode` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`topics`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`topics` ;

CREATE TABLE IF NOT EXISTS `neuron`.`topics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(70) NOT NULL,
  `topic` LONGTEXT NOT NULL,
  `summary` VARCHAR(255) NOT NULL,
  `chat_id` VARCHAR(45) NOT NULL,
  `date_topic` DATE NOT NULL,
  `categories_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_topics_categories1_idx` (`categories_id` ASC) VISIBLE,
  INDEX `fk_topics_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_topics_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `neuron`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_topics_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `neuron`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`tags` ;

CREATE TABLE IF NOT EXISTS `neuron`.`tags` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`comments` ;

CREATE TABLE IF NOT EXISTS `neuron`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username_comment` VARCHAR(70) NOT NULL,
  `comment` MEDIUMTEXT NOT NULL,
  `date_hour` DATETIME NOT NULL,
  `topics_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_topics1_idx` (`topics_id` ASC) VISIBLE,
  INDEX `fk_comments_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_topics1`
    FOREIGN KEY (`topics_id`)
    REFERENCES `neuron`.`topics` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `neuron`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`private_messages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`private_messages` ;

CREATE TABLE IF NOT EXISTS `neuron`.`private_messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username_pm` VARCHAR(70) NOT NULL,
  `sender` VARCHAR(70) NOT NULL,
  `receiver` VARCHAR(70) NOT NULL,
  `date_pm` DATE NOT NULL,
  `subject` VARCHAR(70) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `message_status` TINYINT(1) NOT NULL COMMENT 'true: message sent\nfalse: message received',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`topics_has_tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`topics_has_tags` ;

CREATE TABLE IF NOT EXISTS `neuron`.`topics_has_tags` (
  `topics_id` INT NOT NULL,
  `tags_id` INT NOT NULL,
  PRIMARY KEY (`topics_id`, `tags_id`),
  INDEX `fk_topics_has_tags_tags1_idx` (`tags_id` ASC) VISIBLE,
  INDEX `fk_topics_has_tags_topics_idx` (`topics_id` ASC) VISIBLE,
  CONSTRAINT `fk_topics_has_tags_topics`
    FOREIGN KEY (`topics_id`)
    REFERENCES `neuron`.`topics` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_topics_has_tags_tags1`
    FOREIGN KEY (`tags_id`)
    REFERENCES `neuron`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`private_messages_has_users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`private_messages_has_users` ;

CREATE TABLE IF NOT EXISTS `neuron`.`private_messages_has_users` (
  `private_messages_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`private_messages_id`, `users_id`),
  INDEX `fk_private_messages_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_private_messages_has_users_private_messages1_idx` (`private_messages_id` ASC) VISIBLE,
  CONSTRAINT `fk_private_messages_has_users_private_messages1`
    FOREIGN KEY (`private_messages_id`)
    REFERENCES `neuron`.`private_messages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_private_messages_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `neuron`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`tags_has_comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`tags_has_comments` ;

CREATE TABLE IF NOT EXISTS `neuron`.`tags_has_comments` (
  `tags_id` INT NOT NULL,
  `comments_id` INT NOT NULL,
  INDEX `fk_tags_has_comments_comments1_idx` (`comments_id` ASC) VISIBLE,
  INDEX `fk_tags_has_comments_tags1_idx` (`tags_id` ASC) VISIBLE,
  CONSTRAINT `fk_tags_has_comments_tags1`
    FOREIGN KEY (`tags_id`)
    REFERENCES `neuron`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tags_has_comments_comments1`
    FOREIGN KEY (`comments_id`)
    REFERENCES `neuron`.`comments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`users_has_tags`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`users_has_tags` ;

CREATE TABLE IF NOT EXISTS `neuron`.`users_has_tags` (
  `users_id` INT NOT NULL,
  `tags_id` INT NOT NULL,
  INDEX `fk_users_has_tags_tags1_idx` (`tags_id` ASC) VISIBLE,
  INDEX `fk_users_has_tags_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_tags_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `neuron`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_tags_tags1`
    FOREIGN KEY (`tags_id`)
    REFERENCES `neuron`.`tags` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neuron`.`blacklist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `neuron`.`blacklist` ;

CREATE TABLE IF NOT EXISTS `neuron`.`blacklist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `neuron`.`categories`
-- -----------------------------------------------------
START TRANSACTION;
USE `neuron`;
INSERT INTO `neuron`.`categories` (`id`, `name`) VALUES (DEFAULT, 'issues');
INSERT INTO `neuron`.`categories` (`id`, `name`) VALUES (DEFAULT, 'projects');
INSERT INTO `neuron`.`categories` (`id`, `name`) VALUES (DEFAULT, 'learning');
INSERT INTO `neuron`.`categories` (`id`, `name`) VALUES (DEFAULT, 'watch');
INSERT INTO `neuron`.`categories` (`id`, `name`) VALUES (DEFAULT, 'misc');

COMMIT;
