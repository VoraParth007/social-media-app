import express from "express";
import {
  createPost,
  likePost,
  renderEditPost,
  updatePost,
} from "../controllers/postController.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router();

router.post("/post", isLoggedIn, createPost);
router.get("/like/:id", isLoggedIn, likePost);
router.get("/edit/:id", isLoggedIn, renderEditPost);
router.post("/update/:id", isLoggedIn, updatePost);

export default router;
