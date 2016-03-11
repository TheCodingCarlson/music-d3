var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Word = require('../models/word');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/music-d3');

router.get('/words', function(req, res) {
	Word.findOne({word: req.body.search}, function(err, word) {
		if(err) {
			res.send(err);
		} else {
			if(word) {
				Word.findByIdAndUpdate(word.id, {value: word.value + 1}, function(err, word) {
					if(err) res.send(err);
				});
			} else {
				var newWord = new Word({word: word, value: 1});
				newWord.save(function(err, data) {
					if(err) {
						res.send(err);
					} else {
						console.log('Saved ' + data);
					}
				});
			};
		};
	});
});

module.exports = router;