const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");
const commentModel = require("../models/commentModel");

// CREATE
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const allcomments = await Comment.find();
    const comments = allcomments.filter((category) => !category.isDeleted);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        isDeleted: true,
      },
      {
        new: true,
      }
    );
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
