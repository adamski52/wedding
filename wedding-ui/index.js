var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    proxy = require('http-proxy-middleware'),
    app = express(),
    port = 9000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/', proxy({
    target: 'http://api:9090/'
}));

app.listen(port);
