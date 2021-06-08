const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");

const rAdminNews = require("../routesAdmin/adminNews");
const rAdminOrder = require("../routesAdmin/adminOrder");
const rAdminRobo = require("../routesAdmin/adminRobo");
const rUser = require("../routesAdmin/users");
const rManagement = require("../routesAdmin/managmentUsers");

const rNews = require("../routes/news");
const rOrder = require("../routes/order");
const auth = require("../middleware/auth");

const rSwagger = require("../docs/index");
module.exports = function (app) {
  app.use("/uploads", express.static("uploads"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  app.use("/", rSwagger);
  app.use("/api", rOrder);
  app.use("/api", rNews);
  app.use("/", rUser);
  app.use(auth);
  app.use("/admin/models", rAdminRobo);
  app.use("/admin/news", rAdminNews);
  app.use("/admin/order", rAdminOrder);
  app.use("/manage", rManagement);

  app.use(function (err, req, res, next) {
    res.status(500).send(err.message);
  });
};
