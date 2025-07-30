import express from "express";
import { renderUpload, handleUpload, renderProfile } from "../controllers/userController.js";
import { isLoggedIn } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/profile/upload", renderUpload);
router.post("/upload", isLoggedIn, upload.single("image"), handleUpload);
router.get("/profile", isLoggedIn, renderProfile);

export default router;
