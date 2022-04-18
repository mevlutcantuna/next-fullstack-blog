import Post from "../../../models/post";
import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return getMyPosts(req, res);
  }
}

const getMyPosts = async (req, res) => {
  const { user_id } = req.body;
  try {
    if (!user_id)
      return res
        .status(400)
        .json({ success: false, message: "Please provide all requirements" });

    let postsWithAuthor = [];

    // get my posts by user_id
    const posts = await Post.find({ user_id }).sort({ createdAt: "desc" });
    // get author of my posts
    for (let i = 0; i < posts.length; i++) {
      const author = await User.findById(user_id);
      postsWithAuthor = [...postsWithAuthor, { ...posts[i]._doc, author }];
    }
    return res.status(200).json({ success: true, posts: postsWithAuthor });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
