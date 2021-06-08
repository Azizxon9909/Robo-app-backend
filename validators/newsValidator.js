const Joi = require("joi");

exports.schema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  about: Joi.string().required(),
});
