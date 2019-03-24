const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const router = require('./routes.js');
const cors = require('cors');
const path = require('path');

let app = express();

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static(__dirname + '/../client/dist'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.use(function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(
  cors({
    allowedHeaders: 'Content-Type, Authorization',
    methods: ['GET, POST, PUT, DELETE, OPTIONS']
  })
);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port is ${port}`);
});
