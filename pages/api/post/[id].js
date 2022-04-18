import Like from "../../../models/like";
import Blog from "../../../models/post";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "DELETE":
      return deletePost(req, res);
  }
}

const deletePost = async (req, res) => {
  const { id } = req.query;

  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Not found post id." });
    }

    // get post
    const post = await Blog.findOne({ _id: id });

    // check post comes
    if (!post) {
      return res
        .status(400)
        .json({ success: false, message: "Not found post." });
    }

    // delete likes of post
    const deleteLikes = await Like.findOneAndDelete({ post_id: id });
    //delete post
    const deletedPost = await Blog.findOneAndDelete({ _id: id });
    return res.status(200).json({ success: true, post: deletedPost });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
