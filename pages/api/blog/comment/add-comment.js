import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/comment";
import User from "../../../../models/user";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return addComment(req, res);
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

    const authorOfComment = await User.findOne({ id: user_id });

    await comment.save().then((comment) => {
      return res.status(200).json({
        success: true,
        comment: { ...comment._doc, author: authorOfComment },
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
