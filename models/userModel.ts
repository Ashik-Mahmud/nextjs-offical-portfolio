import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      url: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
      },
      public_id: {
        type: String,
        trim: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
