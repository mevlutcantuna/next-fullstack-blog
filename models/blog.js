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
  author: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.BlogSchema || mongoose.model("Blog", BlogSchema);
