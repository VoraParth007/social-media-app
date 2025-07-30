import userModel from "../models/user.js";

export const renderUpload = (req, res) => {
  res.render("profileUpload");
};

export const handleUpload = async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  user.profileImage = req.file.filename;
  await user.save();
  res.redirect("/profile");
};

export const renderProfile = async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email }).populate("posts");
  res.render("profile", { user });
};
