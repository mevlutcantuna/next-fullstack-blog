import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
import generateToken from "../../../utils/generateToken";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({ success: true, message: "LOGIN API" });
    case "POST":
      return login(req, res);
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //to check user exits
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Not Found User" });

    // to verify password
    const isPasswordCorrect = await user.checkPassword(password);
    if (!isPasswordCorrect)
      return res
        .status(404)
        .json({ success: false, message: "password is wrong" });

    // create token by id
    const token = generateToken(user._id);
    return res
      .status(200)
      .json({
        _id: user["_id"],
        fullname: user["fullname"],
        email: user["email"],
        password: user["password"],
        image: user["image"],
        __v: user["__v"],
        token,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
