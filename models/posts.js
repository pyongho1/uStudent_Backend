import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postsSchema);

export { Post };
