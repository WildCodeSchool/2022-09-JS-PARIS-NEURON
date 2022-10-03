INSERT INTO
  `neuron`.`users` (
    `username`,
    `hashedpassword`,
    `mail`,
    `role`,
    `status`,
    `chat_id`
  )
VALUES
  (
    'test',
    'bla',
    'test@test.net',
    'test',
    0,
    123456789
  );

INSERT INTO
  `neuron`.`tags` (`tag`)
VALUES
  ('test');

-- PROBLÈMES
INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title1',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title1chatid',
    '2022-09-24',
    1,
    1
  );

INSERT INTO
  `neuron`.`topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (LAST_INSERT_ID (), 1);

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title2',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title2chatid',
    '2022-09-25',
    1,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title3',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title3chatid',
    '2022-09-24',
    1,
    1
  );

-- PROJETS
INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title4',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title4chatid',
    '2022-09-24',
    2,
    1
  );

INSERT INTO
  `neuron`.`topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (LAST_INSERT_ID (), 1);

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title5',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title5chatid',
    '2022-09-25',
    2,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title6',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title6chatid',
    '2022-09-24',
    2,
    1
  );

-- APPRENTISSAGE
INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title7',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title4chatid',
    '2022-09-24',
    3,
    1
  );

INSERT INTO
  `neuron`.`topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (LAST_INSERT_ID (), 1);

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title8',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title5chatid',
    '2022-09-24',
    3,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title9',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title6chatid',
    '2022-09-24',
    3,
    1
  );

-- VEILLE
INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title10',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title4chatid',
    '2022-09-25',
    4,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title11',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title5chatid',
    '2022-09-25',
    4,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title12',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title6chatid',
    '2022-09-24',
    4,
    1
  );

INSERT INTO
  `neuron`.`topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (LAST_INSERT_ID (), 1);

-- DIVERS
INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title13',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title4chatid',
    '2022-09-24',
    5,
    1
  );

INSERT INTO
  `neuron`.`topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (LAST_INSERT_ID (), 1);

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title14',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title5chatid',
    '2022-09-24',
    5,
    1
  );

INSERT INTO
  `neuron`.`topics` (
    `title`,
    `topic`,
    `summary`,
    `chat_id`,
    `date`,
    `categories_id`,
    `users_id`
  )
VALUES
  (
    'title15',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'title6chatid',
    '2022-09-24',
    5,
    1
  );
