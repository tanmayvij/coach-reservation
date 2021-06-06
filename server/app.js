const express = require('express');
const app = express();
const system = require('./system');
const morgan = require('morgan');
const cors = require('cors');
const parser = require('body-parser');
const authenticate = require('./auth');

app.set('port', process.env.PORT ? process.env.PORT : 3000);

app.use(cors());
app.use(morgan('dev'));

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json({}));

app.use('/api', authenticate, system);
app.use('/', express.static('public'));

const server = app.listen(app.get('port'), function() {
	console.log(server.address());
});