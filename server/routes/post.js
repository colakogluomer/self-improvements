import express from "express";
const router = express.Router();
import PostService from "../services/PostService.js";

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const newPost = await PostService.add({ email, password });

  res.json(newPost);
  console.log(newPost);
});

router.get("/", async (req, res) => {
  const posts = await PostService.getAll();

  res.json(posts);
});

export default router;
