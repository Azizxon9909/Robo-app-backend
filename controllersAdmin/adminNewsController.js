const { News } = require("../model/News");
const { schema } = require("../validators/newsValidator");

exports.getNews = async (req, res) => {
  const news = await News.find().sort({ dateNews: -1 });
  res.status(200).send(news);
};
exports.getNew = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news)
    return res
      .status(404)
      .send("Berilgan IDga teng bo'lgan yangilik topilmadi.");
  res.status(200).send(news);
};

exports.createNews = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let news = new News({
    title: req.body.title,
    about: req.body.about,
    photo: req.file.path,
  });
  news = await news.save();

  res.status(201).send(news);
};
exports.updateNews = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let news = await News.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    about: req.body.about,
    photo: req.file.path,
  });
  if (!news)
    return res
      .status(404)
      .send("Berilgan IDga teng bo'lgan yangilik topilmadi.");
  news = await news.save();
  res.status(200).send(news);
  res.status(500).send(err.message);
};

exports.deleteNews = async (req, res) => {
  let news = await News.findByIdAndRemove(req.params.id);
  if (!news)
    return res
      .status(404)
      .send("Berilgan IDga teng bo'lgan yangilik topilmadi.");
  res.status(200).send(news);
  res.status(500).send(err.message);
};
