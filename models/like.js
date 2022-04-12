const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  post_id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Like || mongoose.model("Like", likeSchema);
