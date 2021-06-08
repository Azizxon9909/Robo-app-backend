const { Order } = require("../model/Order");
const { schema } = require("../validators/orderValidator");

exports.createOrder = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let order = new Order({
    first_name: req.body.first_name,
    surname: req.body.surname,
    phone_number: req.body.phone_number,
    quantity: req.body.quantity,
    model: req.body.model,
  });
  order = await order.save();

  res.status(201).send(order);
};
