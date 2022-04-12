import dbConnect from "../../../utils/dbConnect";
import Like from "../../../models/like";
import Blog from "../../../models/blog";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return updatePostLike(req, res);
  }
}

const updatePostLike = async (req, res) => {
  const { post_id, user_id, likeValue } = req.body;

  try {
    if (!post_id || !user_id || !likeValue) {
      return res.status(400).json({ success: false, message: error.message });
    }

    const oldPost = await Blog.findOne({ _id: post_id });

    const likes = oldPost.likes + likeValue;
    const post = await Blog.findOneAndUpdate(
      { _id: post_id },
      { likes },
      {
        new: true,
      }
    );

    if (likeValue < 0) {
      // to delete like data from like database
      await Like.findOneAndDelete({ user_id, post_id });
      return res
        .status(200)
        .json({ success: true, post: { ...post._doc, isLiked: false } });
    } else {
      const liked = new Like({ user_id, post_id });
      await liked.save();

      return res
        .status(200)
        .json({ success: true, post: { ...post._doc, isLiked: true } });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
