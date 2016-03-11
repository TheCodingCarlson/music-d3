var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Word = require('../models/word');

mongoose.connect('mongodb://localhost/music-d3');

router.get('/search', function(req, res) {
	Word.findOne({word: req.body.search}, function(err, word) {
		if(err) {
			console.log(err);
		} else {
			if(word) {
				Word.findByIdAndUpdate(word.id, {value: word.value + 1}, function(err, word) {
					if(err) console.log(err);
				});
			} else {
				var newWord = new Word({word: req.body.search, value: 1});
				newWord.save(function(err, data) {
					if(err) {
						console.log(err);
					} else {
						console.log('Saved ' + data);
					}
				});
			};
		};
	});
});

module.exports = router;