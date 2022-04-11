const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  shortDescription: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: Object,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: "User" }],

});

module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
