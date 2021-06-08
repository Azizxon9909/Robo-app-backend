const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/ournews", newsController.getAllNews);
router.get("/home", newsController.getLastNews);
router.get("/ournews/:id", newsController.getNew);
router.get("/home/:id", newsController.getNew);

module.exports = router;