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

 INSERT INTO 
 `neuron`.`private_messages` 
 ( `username_pm`,
 `sender`,
 `receiver`,
 `date_pm`,
 `subject`,
 `content`,
 `message_status`
 )
 VALUES  
 ('test',
    'test2',
    'test',
    '2022-09-27',
    'TEST MAIL',
    'Test about Mail from db to see something',
    '0'
 );







