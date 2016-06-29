var express = require('express');


var app = express();

app.get('/headers', function (request, response) {
  response.json({
    header: request.headers
  });
});


app.get('/headers/:header_name', function (request, response) {
  var header_name = request.params.header_name;
  // var headers = request.headers;

  response.json({
    userAgent: request.headers[header_name]
  });
});


app.get('/version', function(request, response) {


  response.json({
    version: request.httpVersion
  });
}); 

app.listen(8080);
