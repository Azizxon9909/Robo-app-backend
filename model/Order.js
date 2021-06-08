const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});
const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;
