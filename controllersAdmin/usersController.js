const { User } = require("../model/User");
const {
  registerValidation,
  loginValidation,
} = require("../validators/userValidator");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { error } = registerValidation.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("Mavjud bo'lgan foydalanuvchi");
  }
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    roles: req.body.roles,
  });
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const { username, email, _id, roles } = user;
  res.send({ _id, username, email, roles });
};

exports.login = async (req, res) => {
  const { error } = loginValidation.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("Email yoki parol xato");
  const isPassword = await bcrypt.compare(req.body.password, user.password);
  if (!isPassword) return res.send("Email yoki parol xato");
  const token = jwt.sign(
    { _id: user._id, roles: user.roles },
    process.env.SECRET_KEY
  );
  res.header("x-auth-token", token).send(true);
};

exports.me = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
};
