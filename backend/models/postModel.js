const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted:{
    type:Boolean,
    default:false
}
}, { timestamps: true });

module.exports = new mongoose.model('post', postSchema)