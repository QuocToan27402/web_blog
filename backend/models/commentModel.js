const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted:{
    type:Boolean,
    default:false
},
}, { timestamps: true });

module.exports = new mongoose.model('comment', commentSchema)
