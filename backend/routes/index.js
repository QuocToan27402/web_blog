var express = require("express");
var router = express.Router();

/* GET home page. */
router.use("/api/users", require("./users"));
router.use("/api/auth", require("./auth"));

router.use("/api/posts", require("./posts"));
router.use("/api/category", require("./category"));
router.use("/api/comments", require("./comment"));

module.exports = router;
