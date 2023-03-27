import { Post } from "../models/posts.js";

const index = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    // req.body.author = req.user.profile;
    const post = await Post.create(req.body);
    // post.author = profile;
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { index, create };
