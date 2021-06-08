const express = require("express");
const router = express.Router();
const adminOrderController = require("../controllersAdmin/adminOrderController");
const { hasPermission } = require("../middleware/roles");

router.get("/",hasPermission("read"), adminOrderController.getAllOrders);
router.get("/:id",hasPermission("read"), adminOrderController.getOrder);
router.delete("/:id",hasPermission("delete"), adminOrderController.deleteOrder);

module.exports = router;