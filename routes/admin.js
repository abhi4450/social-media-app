const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.post("/savePost", adminController.savePostForm);


module.exports = router;
