var express = require('express');
var SearchTerm = require('..models/Searchterm');
var router = express.Router();
var mongoose = require('mongoose');
var Word = require('../models/word');

mongoose.connect('mongodb://localhost/music');

router.get('/words', function(req, res) {
	
});

module.exports = router;