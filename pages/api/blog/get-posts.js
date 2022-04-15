import Blog from "../../../models/blog";
import User from "../../../models/user";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getPostsByFilter(req, res);
  }
}

const getPostsByFilter = async (req, res) => {
  const { search, tag } = req.query;

  try {
    let filteredPosts = [];

    const posts = await Blog.find({
      $or: [
        { title: { $regex: ".*" + search + ".*" } },
        { shortDescription: { $regex: ".*" + search + ".*" } },
        { description: { $regex: ".*" + search + ".*" } },
      ],
      tags: tag === "" ? { $ne: tag } : { $in: tag },
    }).sort({ createdAt: "desc" });

    for (let i = 0; i < posts.length; i++) {
      const user = await User.findOne({ _id: posts[i].user_id });
      filteredPosts = [...filteredPosts, { ...posts[i]._doc, author: user }];
    }

    return res.status(200).json({ success: true, posts: [...filteredPosts] });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
