const Joi = require("joi");
exports.registerValidation = Joi.object({
  email: Joi.string().min(3).max(50).required().email(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  superAdmin: Joi.boolean(),
});

exports.loginValidation = Joi.object({
  email: Joi.string().min(2).email().required(),
  password: Joi.string().min(2).required(),
});
