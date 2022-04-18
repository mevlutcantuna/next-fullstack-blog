import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();
 
export default function handler (req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({success:true,message:"SIGNUP API"});
    case "POST":
      return signup(req, res); 
  }
}

const signup = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;

    // to check user exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res
        .status(400)
        .json({ success: false, message: "the user exits" });

    // add new user to DB
    const newUser = new User({ fullname, email, password });
    await newUser
      .save()
      .then(() => {
        res.status(200).json(newUser);
      })
      .catch((error) => res.status(400).json({success:false,message:error.message}));

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
