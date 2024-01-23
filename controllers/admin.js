const Comment = require('../models/Comment')

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

exports.saveCommentForm = (req, res, next) => {
  const newCommentText = req.body.commentText;
  const newPostId = req.body.postId;

  return req.user
    .createComment({
      commentText: newCommentText,
      postId: newPostId,
    })
    .then(() => {
      res.redirect("/createPost");
    });
};


// In your Express app
exports.deletePostComment = (req, res, next) => {
    const commentId = req.body.commentId;
  
    // Assuming you have a Comment model
    Comment.destroy({
        where: {
            id: commentId,
        },
    })
        .then(() => {
            res.redirect('/createPost'); // Redirect to the page where the comments are displayed
        })
        .catch((err) => {
            console.error('Error deleting comment:', err);
            res.status(500).send('Error deleting comment');
        });
}
  