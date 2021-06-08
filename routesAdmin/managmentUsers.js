const express = require("express");
const router = express.Router();
const managment = require("../controllersAdmin/managmentUsersController");
const { hasPermission } = require("../middleware/roles");

router.get("/users",hasPermission("read"), managment.allUsers);
router.get("/users/:id",hasPermission("read"), managment.getUser);
router.delete("/users/:id",hasPermission("delete"), managment.deleteUser);
router.put("/users/:id",hasPermission("read"), managment.addPermission);


module.exports = router;