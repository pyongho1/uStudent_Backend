import { Post } from "../models/posts.js";
import { Profile } from "../models/profile.js";

const index = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("author");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    req.body.author = req.user.profile;
    const post = await Post.create(req.body);
    // const profile = await Profile.findByIdAndUpdate(
    //   req.user.profile,
    //   { currentStatus: req.body.post, $push: { posts: posts } },
    //   { new: true }
    // );
    // post.author = profile;
    // const profile = await Profile;
    // post.author = profile;
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { index, create, show };
