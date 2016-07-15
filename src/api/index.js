/*jslint node: true */

'use strict';

// gotta call express everywhere?
var express = require('express');
var Todo = require('../models/todo.js');
// instantiate our router objects
var router = express.Router();

// TODOS: retrieve entry
router.get('/todos', function(req, res) {
	Todo.find({}, function(err, todos) {
		if (err) {
			console.log("Error getting data: " + err);
			res.status(500).json({message: err.message});
		} else {
			res.json({
				todos: todos
			});
		}
	});
});

// TODOS: update entry
router.put('/todos/:id', function(req, res) {
	var id = req.params.id;
	var todo = req.body;

	// if todo id doesn't match
	if (todo && todo._id !== id) {
		return res.status(500).json({err: "IDs don't match"});
	}

	// mongoose method to look up id
	Todo.findByIdAndUpdate(
		id, // id that we're updating
		todo, // the data we're going to update
		{new: true}, // options parameter to denote that we want the new data
		function(err, todo) {
			if (err) {
				return res.status(500).json({err: err.message});
			}

			res.json({
				todo: todo,
				message: "Todo Updated"
			}
		);
	});
});

// TODOS: create entry
router.post('/todos', function(req, res) {
	var todo = req.body;
	Todo.create(todo, function(err, todo) {
		if (err) {
			return res.status(500).json({err: err.message});
		}

		res.json({
			todo: todo,
			message: "Todo created"
		});
	});
});

// TODOS: delete entry

module.exports = router;