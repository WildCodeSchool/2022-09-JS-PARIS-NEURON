SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
SET @@auto_increment_increment=1;
SET NAMES 'utf8';

DROP TABLE
  IF EXISTS topics_has_tags;

DROP TABLE
  IF EXISTS private_messages_has_users;

DROP TABLE
  IF EXISTS users_has_tags;

DROP TABLE
  IF EXISTS comments_has_tags;
  
DROP TABLE
  IF EXISTS followed;

DROP TABLE
  IF EXISTS comments;
  
DROP TABLE
  IF EXISTS topics;

DROP TABLE
  IF EXISTS categories;

DROP TABLE
  IF EXISTS tags;

DROP TABLE
  IF EXISTS private_messages;
  
DROP TABLE
  IF EXISTS blacklist;

DROP TABLE
  IF EXISTS users;

CREATE TABLE
  IF NOT EXISTS `categories` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
  );

CREATE TABLE
  IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(10) NOT NULL,
    `hashedpassword` VARCHAR(255) NOT NULL,
    `mail` VARCHAR(70) NOT NULL UNIQUE,
    `role` VARCHAR(45) NOT NULL,
    `status` TINYINT (1) NOT NULL,
    `chat_id` VARCHAR(45) NOT NULL,
    `image_avatar` BLOB NULL,
    `linkedin` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `description` VARCHAR(8000) NULL,
    `color_mode` TINYINT (1) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`username`, `mail`)
  );

CREATE TABLE
  IF NOT EXISTS `topics` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(70) NOT NULL,
    `topic` LONGTEXT NOT NULL,
    `summary` VARCHAR(255) NOT NULL,
    `chat_id` VARCHAR(45) NOT NULL,
    `date` DATE NOT NULL,
    `categories_id` INT NOT NULL,
    `users_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `tags` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `tag` VARCHAR(45) NOT NULL UNIQUE,
    PRIMARY KEY (`id`),
        UNIQUE (`tag`)
  );

CREATE TABLE
  IF NOT EXISTS `comments` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `comment` MEDIUMTEXT NOT NULL,
    `date_comment` DATE NOT NULL,
    `topics_id` INT NOT NULL,
    `users_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`topics_id`) REFERENCES `topics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `private_messages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `sender` VARCHAR(70) NOT NULL,
    `receiver` VARCHAR(70) NOT NULL,
    `subject` VARCHAR(70) NOT NULL,
    `content` MEDIUMTEXT NOT NULL,
    `date_message` DATE NOT NULL,
    `message_status` TINYINT (1) NOT NULL COMMENT 'true: message sent\nfalse: message received',
    PRIMARY KEY (`id`)
  );

CREATE TABLE
  IF NOT EXISTS `topics_has_tags` (
    `topics_id` INT NOT NULL,
    `tags_id` INT NOT NULL,
    FOREIGN KEY (`topics_id`) REFERENCES `topics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `private_messages_has_users` (
    `private_messages_id` INT NOT NULL,
    `users_id` INT NOT NULL,
    `neuron_id` INT NOT NULL,
    PRIMARY KEY (`private_messages_id`, `users_id`),
    FOREIGN KEY (`private_messages_id`) REFERENCES `private_messages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `users_has_tags` (
    `users_id` INT NOT NULL,
    `tags_id` INT NOT NULL,
    FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `comments_has_tags` (
    `comments_id` INT NOT NULL,
    `tags_id` INT NOT NULL,
    FOREIGN KEY (`comments_id`) REFERENCES `comments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

CREATE TABLE
  IF NOT EXISTS `blacklist` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
  );

CREATE TABLE
  IF NOT EXISTS `followed` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `users_id` INT NOT NULL,
    `friend_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
  );

INSERT INTO
  `categories` (`name`)
VALUES
  ('problèmes');

INSERT INTO
  `categories` (`name`)
VALUES
  ('projets');

INSERT INTO
  `categories` (`name`)
VALUES
  ('apprentissage');

INSERT INTO
  `categories` (`name`)
VALUES
  ('veille');

INSERT INTO
  `categories` (`name`)
VALUES
  ('divers');
  
