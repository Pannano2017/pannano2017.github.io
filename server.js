var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)+'/dist'));
app.use("/dist/css", express.static(__dirname));
app.use("/dist/img", express.static(__dirname + '/img'));
app.use("/dist/js", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

app.listen(process.env.PORT || 8080);