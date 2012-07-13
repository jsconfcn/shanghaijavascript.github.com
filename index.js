var express = require('express');
var app = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

// serve up our static index.html
app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.listen(10080);