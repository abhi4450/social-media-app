const Post = require("../models/Post");

exports.getPostForm = (req, res, next) => {
  req.user.getPosts().then((posts) => {
    res.render("add-post", {
      posts: posts,
    });
  });
};
