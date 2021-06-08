const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.uploads = multer({
  storage,
  limits: { fieldSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    if (extname !== ".jpg" && extname !== ".jpeg" && extname !== ".png") {
      const err = new Error("xatolik bor");
      err.code = 404;
      return cb(err);
    }
    cb(null, true);
  },
  preservePath: true,
}).single("photo");
