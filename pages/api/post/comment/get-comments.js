import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/comment";
import User from "../../../../models/user";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return getComments(req, res);
  } 
}

const getComments = async (req, res) => {
  const { post_id } = req.body;

  try { 
    // check post_id comes
    if (!post_id) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    let commentsWithUser = [];

    // get comments of post
    const comments = await Comment.find({ post_id }).sort({"created_at":"desc"})

    // get author of comment and add to commentWithUser
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
