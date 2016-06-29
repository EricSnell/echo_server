var express = require('express');


var app = express();

app.get('/headers', function (request, response) {
  response.json({
    header: request.headers
  });
});


app.get('/headers/:header_name', function (request, reponse) {
  var header_name = request.params.header_name;
  var header = request.headers;
  var test = header[header_name];
  response.json({
    test
  });
});
/*

app.get('/version', function(request, response) {
  response.json({

  });
}); */

app.listen(8080);
