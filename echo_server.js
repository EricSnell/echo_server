var express = require('express');


var app = express();

app.get('/headers', function(request, response) {
	request.headers;
    response.json({request});
});

/*
app.get('/headers/:header_name', function(request, reponse) {
	response.json({

	});
});


app.get('/version', function(request, response) {
	response.json({

	});
}); */

app.listen(8080);