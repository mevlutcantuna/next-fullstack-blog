import Post from "../../../models/post";
import Like from "../../../models/like";
import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return getDetailOfPost(req, res);
  }
}

const getDetailOfPost = async (req, res) => {
  const { post_id, user_id } = req.body;
  try {
    if (post_id) {
      // get post details
      const post = await Post.findOne({ _id: post_id });
      const isLiked = (await Like.findOne({ user_id, post_id })) ? true : false;
      const user = await User.findOne({ _id: post.user_id });

      return res
        .status(200)
        .json({ success: true, post: { ...post._doc, isLiked, author: user } });
    } else
      return res
        .status(400)
        .json({ success: false, message: "Something is wrong." });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
