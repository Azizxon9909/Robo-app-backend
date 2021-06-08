const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllersAdmin/usersController");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/me", auth, userController.me);

module.exports = router;
