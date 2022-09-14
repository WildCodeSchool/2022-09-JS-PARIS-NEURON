const Joi = require("joi");

const validateUser = (req, res, next) => {
  const userSchema = Joi.object({
    username: Joi.string().max(70).required(),
    password: Joi.string().max(255).required(),
    mail: Joi.string().email().max(70).required(),
    chat_id: Joi.string().max(45).required(),
    fav_tag: Joi.number(),
    // image_avatar: Joi.object({
    //   headers: Joi.object({
    //     "content-type": Joi.string().valid(["image/jpeg", "image/png"]),
    //   }),
    // }),
    fav_topic: Joi.number(),
    linkedin: Joi.string().max(255),
    github: Joi.string().max(255),
    description: Joi.string().max(65535),
    color_mode: Joi.boolean(),
  });
  const {
    username,
    password,
    mail,
    chat_id,
    fav_tag,
    fav_topic,
    linkedin,
    github,
    description,
    color_mode,
  } = req.body;

  const { error } = userSchema.validate(
    {
      username,
      password,
      mail,
      chat_id,
      fav_tag,
      fav_topic,
      linkedin,
      github,
      description,
      color_mode,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateUser };
