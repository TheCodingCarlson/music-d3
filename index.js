var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./controllers/api.js'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);