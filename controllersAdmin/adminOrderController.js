const { Order } = require("../model/Order");
const { schema } = require("../validators/orderValidator");

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).send(orders);
};
exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order)
    return res
      .status(404)
      .send("Berilgan IDga teng bo'lgan yangilik topilmadi.");
  res.status(200).send(order);
};

exports.deleteOrder = async (req, res) => {
  let order = await Order.findByIdAndRemove(req.params.id);
  if (!order)
    return res
      .status(404)
      .send("Berilgan IDga teng bo'lgan yangilik topilmadi.");
  res.status(200).send(order);
};
