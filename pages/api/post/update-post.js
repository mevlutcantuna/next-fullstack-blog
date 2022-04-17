import Post from "../../../models/post";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return updatePost(req, res);
  }
}

const updatePost = async (req, res) => {
  const { updatedPost, post_id } = req.body;
  
  try {
    if (!updatedPost && !post_id) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all requirements." });
    }
    const post = await Post.findByIdAndUpdate({ _id: post_id }, updatedPost, {
      new: true,
    });
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
