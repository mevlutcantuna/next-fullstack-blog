import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../models/blog";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getMostPopular(req, res);
  }
}

const getMostPopular = async (req, res) => {
  try {
    const mostPopularPosts = await Blog.find().sort({ likes: 1 }).limit(3);
    return res.status(200).json({ success: true, posts: mostPopularPosts });
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message });
  }
};
