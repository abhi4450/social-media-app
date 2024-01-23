exports.getPostForm = (req, res, next) => {
  req.user.getPosts({ include: ["comments"] }).then((posts) => {
    res.render("add-post", {
      posts: posts,
    });
  });
};
