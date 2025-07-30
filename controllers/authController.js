import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.js";

export const registerUser = async (req, res) => {
  const { name, username, age, email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) return res.status(400).send("User already exists");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = await userModel.create({ name, username, age, email, password: hash });
      const token = jwt.sign({ email, userid: user._id }, process.env.JWT_SECRET || "ppppppppp");
      res.cookie("token", token);
      res.redirect("/login");
    });
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("Invalid credentials");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ email, userid: user._id }, process.env.JWT_SECRET || "ppppppppp");
      res.cookie("token", token);
      res.redirect("/profile");
    } else {
      res.redirect("/login");
    }
  });
};

export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
