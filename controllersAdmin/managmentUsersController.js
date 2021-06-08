const { User } = require("../model/User");

exports.allUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.send(users);
};
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user)
    return res.status(404).send("Berilgan IDga teng bo'lgan user topilmadi.");
  res.status(200).send(user);
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user)
    return res.status(404).send("Berilgan IDga teng bo'lgan user topilmadi.");
  res.status(200).send("Berigan Idga teng user o'chirildi");
};
exports.addPermission = async (req, res) => {
  let reqRole = req.body.addRole;
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
  function findRole(reqRole, roles) {
    if (reqRole === roles.moderator.name) {
      return roles.moderator;
    } else if (reqRole === roles.superAdmin.name) {
      return roles.superAdmin;
    } else {
      return roles.admin;
    }
  }
  let user2 = await User.findByIdAndUpdate(req.params.id, {
    roles: findRole(reqRole, roles),
  });
  if (!user2)
    return res.status(404).send("Berilgan IDga teng bo'lgan user topilmadi.");
  user2 = await user2.save();
  res.send("Permission added");
};
