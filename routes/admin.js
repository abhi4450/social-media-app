const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.post("/savePost", adminController.savePostForm);
router.post("/saveComment", adminController.saveCommentForm);
router.post('/deleteComment',adminController.deletePostComment)

module.exports = router;
