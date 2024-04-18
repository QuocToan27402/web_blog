const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Post = require("../models/postModel");

// CREATE (POST)
router.post("/posts", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      categories: req.body.catId || [],
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ (GET all posts)
router.get("/posts", async (req, res) => {
  try {
    const allposts = await Post.find().populate("author", "name").populate("categories", "name");
    const posts = allposts.filter((post) => !post.isDeleted);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ (GET single post by ID)
router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "name").populate("categories", "name");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// FIND POSTS BY AUTHOR
router.get("/posts/author/:authorId", async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.authorId }).populate("author", "name");
    const allpost = posts.filter((post) => !post.isDeleted);
    if (!allpost || allpost.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found for this author" });
    }
    res.json(allpost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// FIND POSTS BY CATEGORIES
router.get("/posts/categories/:categoryId", async (req, res) => {
  try {
    const posts = await Post.find({ categories: req.params.categoryId }).populate("author", "name");
    if (!posts || posts.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found in this category" });
    }
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE (PUT)
router.put("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: true,
      },
      {
        new: true,
      }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
