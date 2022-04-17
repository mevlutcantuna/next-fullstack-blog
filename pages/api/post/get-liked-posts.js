import Post from "../../../models/post";
import User from "../../../models/user";
import Like from "../../../models/like";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return getLikedPosts(req, res);
  }
}

const getLikedPosts = async (req, res) => {
  const { user_id } = req.body;
  try {
    if (!user_id)
      return res
        .status(400)
        .json({ success: false, message: "Please provide all requirements" });

    const likedPostsIDs = await Like.find({ user_id });
    let likedPosts = [];
    for (let i = 0; i < likedPostsIDs.length; i++) {
      const post = await Post.find({ _id: likedPostsIDs[i].post_id });
      const author = await User.find({ _id: likedPostsIDs[i].user_id });
      likedPosts = [
        ...likedPosts,
        { ...post[0]._doc, author: { ...author[0]._doc } },
      ];
    }

    return res.status(200).json({ success: true, posts: likedPosts });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
