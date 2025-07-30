import postModel from "../models/post.js";
import userModel from "../models/user.js";

export const createPost = async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  const post = await postModel.create({ user: user._id, content: req.body.content });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
};

export const likePost = async (req, res) => {
  const post = await postModel.findById(req.params.id);
  const index = post.likes.indexOf(req.user.userid);
  if (index === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(index, 1);
  }
  await post.save();
  res.redirect("/profile");
};

export const renderEditPost = async (req, res) => {
  const post = await postModel.findById(req.params.id).populate("user");
  res.render("edit", { post });
};

export const updatePost = async (req, res) => {
  await postModel.findByIdAndUpdate(req.params.id, { content: req.body.content });
  res.redirect("/profile");
};
