const Joi = require("joi");

const validateUser = (req, res, next) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;

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

module.exports = { validateUser };
