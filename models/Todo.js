const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: false
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;