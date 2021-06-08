const express = require("express");
const router = express.Router();
const { hasPermission } = require("../middleware/roles");
const roboController = require("../controllersAdmin/adminRoboController");
const multer = require("../middleware/multer");

router.get("/", roboController.getAllRobos);
router.get("/:id", roboController.getRobo);
router.post("/", multer.uploads, roboController.createRobo);
router.put("/:id", multer.uploads, roboController.updateRobo);
router.put("/", roboController.sale);
router.delete("/:id", roboController.deleteRobo);

module.exports = router;
