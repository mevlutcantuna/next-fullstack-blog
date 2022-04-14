import dbConnect from "../../../../utils/dbConnect";
import Comment from "../../../../models/comment";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE":
      return deleteComment(req, res);
  }
}

const deleteComment = async (req, res) => {
  const {id} = req.query;

  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const deletedComment = await Comment.findOneAndDelete({ _id: id });

    return res.status(200).json({ success: true, comment: deletedComment });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
