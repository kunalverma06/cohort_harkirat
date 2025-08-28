import mongoose, { Schema } from "mongoose";
import User from "./user.models";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true, // video file is mandatory
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // relation to users collection
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // gives createdAt and updatedAt automatically
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
