import User from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default function handler(req, res) {
  switch (req.method) {
    case "PUT":
      return updateUser(req, res);
  }
}

const updateUser = async (req, res) => {
  const { updatedUser, user_id } = req.body;

  try {
    if (!user_id && !updatedUser) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all requirements." });
    }

    const user = await User.findByIdAndUpdate({ _id: user_id }, updatedUser, {
      new: true,
    });
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
