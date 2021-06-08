const Joi = require("joi");

exports.schema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  link: Joi.string().required(),
  sale: Joi.number()
});
exports.schemaUpdate = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
  link: Joi.string(),
  sale: Joi.number()
});