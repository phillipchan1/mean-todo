/*jslint node: true */

'use strict';

var express = require('express');
var router = require('./api');
var parser = require('body-parser');

// create instance of the server to variable app
var app = express();

// create our database
require('./database.js');

// put in seed data
require('./seed');

// get method for parsing body
app.use(parser.json());

// tell express to use "static folder". and then we'll pass in the folder to that.
// first parameter is where we're looking from. defaults to '/'
app.use('/', express.static('public'));

// use this path and sources the middle-ware router object in
app.use('/api', router);

// have our app listen on port 3000
app.listen(3000, function() {
	console.log('Service on running on 3000');
});