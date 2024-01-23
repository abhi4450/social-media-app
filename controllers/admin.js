exports.savePostForm = (req, res, next) => {
  let newPostLink = req.body.postImgLink;
  let postDesc = req.body.postDescription;
  return req.user
    .createPost({
      imageLink: newPostLink,
      description: postDesc,
    })
    .then((result) => {
      res.redirect("/createPost");
    })
    .catch((err) => console.log("error creating a post"));
};
