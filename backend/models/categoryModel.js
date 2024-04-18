const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDeleted:{
    type:Boolean,
    default:false
}
}, { timestamps: true });

module.exports = new mongoose.model('category', categorySchema)
