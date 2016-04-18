var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

var searchUrl = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=';
var artistUrl = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists';
var trackUrl = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=united+states';

router.get('/search', function(req, res) {
	request(searchUrl + req.query.q + '&api_key=' + process.env.LAST_FM_API_KEY + '&format=json', function(err, response, body) {
		 if (!err && response.statusCode == 200) {
    		res.send(body);
  		} else {
  			console.log(err);
  		}
	});
});

router.get('/artists', function(req, res) {
	request(artistUrl + '&api_key=' + process.env.LAST_FM_API_KEY + '&format=json', function(err, response, body) {
		 if (!err && response.statusCode == 200) {
    		res.send(body);
  		} else {
  			console.log(err);
  		}
	});
});

router.get('/tracks', function(req, res) {
	request(trackUrl + '&api_key=' + process.env.LAST_FM_API_KEY + '&format=json', function(err, response, body) {
		 if (!err && response.statusCode == 200) {
    		res.send(body);
  		} else {
  			console.log(err);
  		}
	});
});

module.exports = router;