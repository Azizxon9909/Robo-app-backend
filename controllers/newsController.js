const { News } = require("../model/News");

exports.getAllNews = async (req, res) => {
  let pagesize = 2;
  if (req.query.page != null) {
    var page = req.query.page;
  }
  const news = await News.find()
    .skip((page - 1) * pagesize)
    .limit(pagesize)
    .sort({ dateNews: -1 });
  res.status(200).send(news);
};
exports.getLastNews = async (req, res) => {
  const news = await News.find().limit(3).sort({ dateNews: -1 });
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
