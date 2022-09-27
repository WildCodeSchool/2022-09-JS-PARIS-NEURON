-- DROP TABLE IF EXISTS `neuron`.`users`;

CREATE TABLE IF NOT EXISTS `neuron`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`));
    ENGINE = InnoDB;

    -- DROP TABLE IF EXISTS `neuron`.`private_messages` ;

CREATE TABLE IF NOT EXISTS `neuron`.`private_messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(70) NOT NULL,
  `sender` VARCHAR(70) NOT NULL,
  `receiver` VARCHAR(70) NOT NULL,
  `subject` VARCHAR(70) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `message_status` TINYINT(1) NOT NULL COMMENT 'true: message sent\nfalse: message received',
  PRIMARY KEY (`id`));
ENGINE = InnoDB;


INSERT INTO `users` (
    `name`,
  )
VALUES (
    `test`,
  );
 
  INSERT INTO `users` (
    `name`,
 )
VALUES (
    `test2`,
);

 INSERT INTO `privatemessages` (
 `name`,
 `sender`,
 `receiver`,
 `subject`,
 `content`,
 )
 VALUES  (
    `test`,
    `test2`,
    `test`,
    `TEST MAIL`,
    `Test about Mail from db to see something`,
 );







