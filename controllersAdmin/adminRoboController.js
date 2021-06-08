const { Robo } = require("../model/Robo");
const { schema, schemaUpdate } = require("../validators/roboValidator");

exports.getAllRobos = async (req, res) => {
  const robo = await Robo.find();
  res.status(200).send(robo);
};
exports.getRobo = async (req, res) => {
  const robo = await Robo.findById(req.params.id);
  if (!robo)
    return res.status(404).send("Berilgan IDga teng bo'lgan model topilmadi.");
  res.status(200).send(robo);
};

exports.createRobo = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let robo = new Robo({
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    photo: req.file.path,
    link: req.body.link,
    sale: req.body.sale,
  });
  robo = await robo.save();

  res.status(201).send(robo);
};
exports.updateRobo = async (req, res) => {
  const { error } = schemaUpdate.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let robo = await Robo.findOneAndUpdate({ _id: req.params.id }, req.body);
  if (!robo)
    return res.status(404).send("Berilgan IDga teng bo'lgan model topilmadi.");
  res.status(200).send(robo);
};

exports.deleteRobo = async (req, res) => {
  let robo = await Robo.findByIdAndRemove(req.params.id);
  if (!robo)
    return res.status(404).send("Berilgan IDga teng bo'lgan model topilmadi.");
  res.status(200).send(robo);
};

exports.sale = async (req, res) => {
  console.log(req.query.name);
  const { error } = schemaUpdate.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let robo = await Robo.updateMany(
    { name: req.query.name },
    {
      sale: req.body.sale,
    }
  );
  if (!robo)
    return res.status(404).send("Berilgan IDga teng bo'lgan model topilmadi.");
  res.status(200).send(robo);
};
