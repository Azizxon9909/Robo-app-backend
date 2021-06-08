const Joi = require("joi");
exports.schema = Joi.object({
  first_name: Joi.string().min(3).max(50).required(),
  surname: Joi.string().required(),
  phone_number: Joi.number().required(),
  model: Joi.string().required(),
  quantity: Joi.number().required(),
});
