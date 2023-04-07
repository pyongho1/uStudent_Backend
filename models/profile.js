import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    name: String,
    photo: {
      type: String,
      default:
        "https://res.cloudinary.com/dmbhhnc2j/image/upload/v1675870453/AdobeStock_349497933_xq1qwl.jpg",
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
