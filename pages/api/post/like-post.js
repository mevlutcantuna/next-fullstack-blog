import dbConnect from "../../../utils/dbConnect";
import Like from "../../../models/like";
import Post from "../../../models/post";

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
    // check body is coming
    if (!post_id || !user_id || !likeValue) {
      return res.status(400).json({ success: false, message: error.message });
    }

    // to get likes before calling here
    const oldPost = await Post.findOne({ _id: post_id });

    const likes = oldPost.likes + likeValue;
    const post = await Post.findOneAndUpdate(
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
      // add to like data to like database
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
 