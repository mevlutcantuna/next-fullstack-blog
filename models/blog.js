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
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  readingTime: {
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
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
