import dbConnect from "../../../utils/dbConnect";
import Comment from "../../../models/Comment";
import User from "../../../models/User";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return addComment(req, res);
    case "GET":
      return getComments(req, res);
    case "DELETE":
      return deleteComment(req, res);
  }
}

const addComment = async (req, res) => {
  const { text, post_id, user_id } = req.body;

  try {
    if (!text || !post_id || !user_id) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const comment = new Comment({
      text,
      post_id,
      user_id,
    });

    await comment.save().then((comment) => {
      return res.status(200).json({
        success: true,
        comment,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getComments = async (req, res) => {
  const { post_id } = req.body;
  try {
    if (!post_id) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    let commentsWithUser = [];

    const comments = await Comment.find({ post_id });

    for (let i = 0; i < comments.length; i++) {
      const user = await User.findOne({ _id: comments[i].user_id });
      commentsWithUser = [
        ...commentsWithUser,
        { ...comments[i]._doc, author: user },
      ];
    }

    return res.status(200).json({
      success: true,
      comments: commentsWithUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteComment = (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
