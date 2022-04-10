import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({success:true,message:"GET USER API"})
    case "POST":
      return getUser(req, res);
  }
}

const getUser = async (req, res) => {
  const { token } = req.body;
  try { 
    // get user
    const user = await User.findOne({ token });
    // check token exists
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Not Found User" });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
