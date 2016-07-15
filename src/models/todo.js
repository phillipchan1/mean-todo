'use strict';

var mongoose = require('mongoose');

// todo.name
// todo.completed

var todoSchema = new mongoose.Schema({
	completed: Boolean,
	name: String
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;