var express = require('express');
var app = express();
var request = require('request');

app.get('/results', function(req, res){
	var url = 'http://omdbapi.com/?s=california&apikey=' + process.env.MOVIEKEY;
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			res.send(body);
		}
	});
});
 

app.listen(3000, function(){
	console.log('Server has started');
});
