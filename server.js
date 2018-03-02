const util = require('util');
const path = require('path');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(compression({ threshold: 102400 }));
app.use(express.static('dist'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, function () {
	console.log(util.format('Start mock server on %s', port));
});