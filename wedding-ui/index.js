const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const app = express();


app.use('/api', proxy({
    target: 'http://localhost:9090',
    onProxyReq: function(proxyReq, req, res) {
        proxyReq.setHeader('Content-Type', 'application/json');
    }
}));

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000);