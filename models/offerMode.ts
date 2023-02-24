import mongoose from "mongoose";
const Schema = mongoose.Schema;

const offerSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.models.Offer || mongoose.model("Offer", offerSchema);
export default Offer;
