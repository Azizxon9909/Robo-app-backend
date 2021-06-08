const mongoose = require("mongoose");

const roboSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  sale: Number
});
const Robo = mongoose.model("Robo", roboSchema);

exports.Robo = Robo;
