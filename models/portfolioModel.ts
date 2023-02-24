import mongoose from "mongoose";
const schema = mongoose.Schema;

const portfolioSchema = new schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  clientLink: {
    type: String,
  },
  serverLink: {
    type: String,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
