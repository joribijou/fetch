import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  newsMainTitle: {
    type: String,
  },
  newsTitle: {
    type: String,
  },
  newsSummaryDescription: {
    type: String,
  },
  newsDescription: {
    type: String,
  },
  newsImage: {
    type: Array,
  },
  publisher: {
    type: String,
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
const News = mongoose.model("News", NewsSchema);

export default News;