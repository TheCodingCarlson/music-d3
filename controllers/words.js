var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Word = require('../models/word');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/music-d3');

// router.get('/', function(req, res) {
// 	Word.find(function(err, words) {
// 		if (err) return res.send({message: "No words found"});
// 		res.send(words);
// 	});
// 	// var newWord = new Word({
// 	// 	word: req.body.search,
// 	// 	value: 1
// 	// });

// 	// newWord.save(function(err) {
// 	// 	if(err) return res.send(err);
// 	// 	res.send(newWord);
// 	// });
// });

router.post('/', function(req, res) {
	console.log(req.body);
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	Word.findOne({search: req.body.word}, function(err, word) {
		if(err) {
			console.log(err);
		} else {
			if(word) {
				Word.findByIdAndUpdate(word.id, {value: word.value + 1}, function(err, word) {
					if(err) console.log(err);
				});
			} else {
				var newWord = new Word({word: req.body.word, value: 1});
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