var express = require('express');
var app = express();

var allFive = require('./routes/allFive')
var index = require('./routes/index')

// static files
app.use(express.static('public'));

// Routes
app.use('/allFive', allFive);
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log("listening on port", port);
});
