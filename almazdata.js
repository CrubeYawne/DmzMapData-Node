const fs = require('fs');


var express = require('express');

var app = express();

app.get('/', function(req, res) {
	
	fs.readFile('poi_visualizer.html', 'utf8', (err, data) => {
			
		if (err) {
			console.error(err);
			return;
		}	
		res.write(data);
		res.end();
	});
    
	
});

app.get('/data', function(req, res) {
    fs.readFile('Data/spawn.json', 'utf8', (err, data) => {
			
		if (err) {
			console.error(err);
			return;
		}	
		res.write(data);
		res.end();
	});
});

app.use('/images', express.static('images'));

app.listen(8080, () =>{
	console.log('almazdata is running at http://localhost:8080/');
	console.log('[ctrl-c] to quit');
}); //the server object listens on port 8080