import jwt from "jsonwebtoken";
import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({ success: true, message: "GET USER API" });
    case "POST":
      return getUser(req, res);
  }
}

const getUser = async (req, res) => {
  const { token } = req.body;
  try {
    // verify token and get id
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    // get user
    const user = await User.findOne({ _id: id });

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
