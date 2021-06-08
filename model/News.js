const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  dateNews: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String,
    required: true,
  },
});
const News = mongoose.model("News", newsSchema);

exports.News = News;
