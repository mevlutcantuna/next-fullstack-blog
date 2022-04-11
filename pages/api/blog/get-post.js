import Blog from "../../../models/blog";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
    return getDetailOfPost(req, res);
      
  }
}


const getDetailOfPost = async (req, res) => {
  const { post_id } = req.body;
  
  try {
    const post = await Blog.findById({ _id: post_id });
    console.log(post)
    return res.status(200).json({ success: true, message: "GET DETAIL OF POST API" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
