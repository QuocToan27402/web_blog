const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categoryModel');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await categoryModel.find(isDeleted == false);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific category
router.get('/:categoryId', async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Không tìm thấy danh mục' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new category
router.post('/createCategory', async (req, res) => {
  try {
    const newCategory = new categoryModel(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a category
router.put('/:categoryId', async (req, res) => {
  try {
    var category = await categoryModel.findByIdAndUpdate(req.params.categoryId, req.body,
        {
            new: true,
        }
    ).exec();
    res.status(200).send(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a category
router.delete('/:categoryId', async (req, res) => {
  try {
    var category = categoryModel.findByIdAndUpdate(req.params.categoryId, {
        isDeleted: true
    },
        {
          new: true
        }).exec();
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
