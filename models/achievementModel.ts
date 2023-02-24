import mongoose from "mongoose";
const schema = mongoose.Schema;

const achievementSchema = new schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 1000,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    link: {
      type: String,
      trim: true,
      maxLength: 1000,
    },
    image: {
      url: {
        type: String,
        trim: true,
      },
      public_id: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Achievement =
  mongoose.models.Achievement ||
  mongoose.model("Achievement", achievementSchema);
export default Achievement;
