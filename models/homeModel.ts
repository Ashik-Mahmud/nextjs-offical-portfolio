import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    heroImage: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    biography: String,
    contact: String,
    services: String,
    yOfExp: String,
    satisfiedClient: String,
    projectDone: String,
    worldWideClient: String,
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);
export default Home;
