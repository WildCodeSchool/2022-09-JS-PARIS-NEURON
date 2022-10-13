INSERT INTO 
`neuron`.`users` 
(`username_users`,
`hashedpassword`,
`mail`,
`role`,
`status`,
`chat_id`)
VALUES 
('alien',
'bla',
'alien@test.net',
'user',
'1',
'123457');

 
INSERT INTO 
`neuron`.`users` 
(`username_users`,
`hashedpassword`,
`mail`,
`role`,
`status`,
`chat_id`)
VALUES 
('alien2',
'bla2',
'alien2@test.net',
'user',
'1',
'875421');


----JS----------------------------------------------------------------
INSERT INTO
`neuron`.`tags`
(`name`)
VALUES 
('JS');

-----ReactJS----------------------------------------------------------------

INSERT INTO
`neuron`.`tags`
(`name`)
VALUES 
('ReactJS');

-----NodeJS----------------------------------------------------------------

INSERT INTO
`neuron`.`tags`
(`name`)
VALUES
('NodeJS');

-----PHP----------------------------------------------------------------

INSERT INTO
`neuron`.`tags`
(`name`)
VALUES 
('PHP');

-----Python--------------------------------------------------------------------

INSERT INTO
`neuron`.`tags`
(`name`)
VALUES 
('Python');

-----Ruby----------------------------------------------------------------

INSERT INTO
`neuron`.`tags`
(`name`)
VALUES 
('Ruby');


------USER 1----------------------------------------------------------------

INSERT INTO
`neuron`.`comments`
(`username_comments`,
`comment`,
`date_hour`,
`topics_id`,
`users_id`)
VALUES
('alien',
'yolooooooooooooooooooo',
'2022/09/30T16:29:18',
'1',
'1');

-----USER 2----------------------------------------------------------------

INSERT INTO
`neuron`.`comments`
(`username_comments`,
`comment`,
`date_hour`,
`topics_id`,
`users_id`)
VALUES
('alien2',
'yolooooooooooooooooooo',
'2022/09/30T16:23:08',
'1',
'2');