const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.send("Token yoq");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next()
  } catch (err) {
    return res.send("yaroqsiz token");
  }
}