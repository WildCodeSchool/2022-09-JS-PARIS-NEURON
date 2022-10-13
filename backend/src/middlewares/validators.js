const Joi = require("joi");

const validateUser = (req, res, next) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
  // Au moins une minuscule, Majuscule, un chiffre et un caractère spécial

  const userSchema = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    password: Joi.string().min(8).regex(pattern).required(),
    mail: Joi.string().email().max(70).required(),
    chat_id: Joi.string().max(45).required(),
  });
  const { username, password, mail, chat_id } = req.body;

  const { error } = userSchema.validate(
    {
      username,
      password,
      mail,
      chat_id,
    },
    { abortEarly: false }
  );

  if (error) {
    console.warn(error.details);
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const validateUserSettings = (req, res, next) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
  // Au moins une minuscule, Majuscule, un chiffre et un caractère spécial
  const userSchema = Joi.object({
    pseudo: Joi.string().min(3).max(10),
    new_pseudo: Joi.string().min(3).max(10),
    password: Joi.string().min(8).regex(pattern),
    new_password: Joi.string().min(8).regex(pattern),
    mail: Joi.string().email().max(70),
    new_email: Joi.string().email().max(70),
    description: Joi.string().max(50),
    linkedin: Joi.string().max(70),
    github: Joi.string().max(70),
  });

  const {
    pseudo,
    new_pseudo,
    password,
    new_password,
    mail,
    new_email,
    linkedin,
    github,
    description,
  } = req.body;

  const { error } = userSchema.validate(
    {
      pseudo,
      new_pseudo,
      password,
      new_password,
      mail,
      new_email,
      linkedin,
      github,
      description,
    },
    { abortEarly: false }
  );

  if (error) {
    console.warn(error.details);
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateUser, validateUserSettings };
