const mongoose = require("mongoose");

let roles = {
  moderator: {
    name: "moderator",
    operations: ["read", "edit", "create", "delete"],
  },
  superAdmin: {
    name: "superAdmin",
    operations: ["read", "delete", "edit"],
  },
  admin: {
    name: "admin",
    operations: ["read", "edit"],
  },
};

const DbUser = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Object,
    default: roles.admin,
  },
});

const User = mongoose.model("user", DbUser);
exports.User = User;
