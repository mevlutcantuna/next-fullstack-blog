import Post from "../../../models/post";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res
        .status(200)
        .json({ success: true, message: "CREATE Post API" });
    case "POST":
      return createPost(req, res);
  }
}

const createPost = async (req, res) => {
  const post = req.body;

  try {
    const addedPost = new Post(post);
    const author = await User.findOne({ _id: post.user_id });

    await addedPost
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          post: { ...addedPost._doc, author: author.fullname },
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
