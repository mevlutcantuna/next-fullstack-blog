import Blog from "../../../models/blog";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res
        .status(200)
        .json({ success: true, message: "CREATE BLOG API" });
    case "POST":
      return createBlog(req, res);
  }
}
const createBlog = async (req, res) => {
  const post = req.body;

  try {
    const addedPost = new Blog(post);
    await addedPost
      .save()
      .then(() => {
        return res.status(200).json({ success: true, post: addedPost });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
