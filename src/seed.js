'use strict';

var Todo = require("./models/todo.js");

var todos = [
	'Feed dog',
	'Walk kids',
	'Water trees'
];

todos.forEach(function(todo, index) {
	Todo.find(
		{'name': todo},
		function(err, todos) {
			if (!err && !todos.length) {
				Todo.create({
					completed: false,
					name: todo
				});
			}
		}
	);
});