const express = require("express");
const router = express.Router();
const { hasPermission } = require("../middleware/roles");
const newsController = require("../controllersAdmin/adminNewsController");
const multer = require("../middleware/multer");

router.get("/", hasPermission("read"), newsController.getNews);
router.get("/:id", hasPermission("read"), newsController.getNew);
router.post("/", hasPermission("read"), multer.uploads, newsController.createNews);
router.put("/:id", hasPermission("edit"), multer.uploads, newsController.updateNews);
router.delete("/:id", hasPermission("delete"), newsController.deleteNews);

module.exports = router;
