DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`));
 

    DROP TABLE IF EXISTS `privatemessages` ;

CREATE TABLE IF NOT EXISTS `privatemessages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(70) NOT NULL,
  `sender` VARCHAR(70) NOT NULL,
  `receiver` VARCHAR(70) NOT NULL,
  `subject` VARCHAR(70) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`));


INSERT INTO 
`test`.`users` (`username`)
VALUES 
('alien');
 
INSERT INTO 
`test`.`users` (`username`)
VALUES ('alien2');

 INSERT INTO 
 `test`.`privatemessages` (
 `username`,
 `sender`,
 `receiver`,
 `subject`,
 `content`
 )
 VALUES  
 (
    'test',
    'test2',
    'test',
    'TEST MAIL',
    'Test about Mail from db to see something'
 );







