INSERT INTO
  `users` (
    `username`,
    `hashedpassword`,
    `mail`,
    `role`,
    `status`,
    `chat_id`
  )
VALUES
  (
    'neuronTeam',
    'bla',
    'test@test.net',
    'test',
    0,
    123456789
  );

INSERT INTO
  `tags` (`tag`)
VALUES
  ('html'),
  ('css'),
  ('js'),
  ('node'),
  ('react'),
  ('express'),
  ('sql'),
  ('markdown'),
  ('database'),
  ('typescript');

-- PROBLÈMES
INSERT INTO
  `topics` (
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
    'exemple pour problèmes',
    '*Lorem* **ipsum dolor** sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'title1chatid',
    '2022-09-24',
    1,
    1
  );

-- PROJETS
INSERT INTO
  `topics` (
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
    'exemple pour projets',
    '*Lorem* **ipsum dolor** sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'title2chatid',
    '2022-09-24',
    2,
    1
  );

-- APPRENTISSAGE
INSERT INTO
  `topics` (
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
    'exemple pour apprentissage',
    '*Lorem* **ipsum dolor** sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'title3chatid',
    '2022-09-24',
    3,
    1
  );

-- VEILLE
INSERT INTO
  `topics` (
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
    'exemple pour veille',
    '*Lorem* **ipsum dolor** sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'title4chatid',
    '2022-09-24',
    4,
    1
  );

-- DIVERS
INSERT INTO
  `topics` (
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
    'exemple pour divers',
    '*Lorem* **ipsum dolor** sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ut voluptates temporibus, rem odit alias quis distinctio, nostrum dignissimos dolor laborum et, neque velit perferendis eaque Nihil beatae non molestiae.',
    'title5chatid',
    '2022-09-24',
    5,
    1
  );

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (1, 1);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (1, 2);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (2, 3);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (2, 4);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (3, 5);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (3, 5);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (4, 7);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (4, 7);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (5, 9);

INSERT INTO
  `topics_has_tags` (`topics_id`, `tags_id`)
VALUES
  (5, 9);