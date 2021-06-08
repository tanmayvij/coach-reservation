const sequelize = require('./system/sequelize');
const express = require('express');
const app = express();
const system = require('./system');
const morgan = require('morgan');
const cors = require('cors');
const parser = require('body-parser');
const authenticate = require('./auth');

sequelize.Train.sync();

app.set('port', process.env.PORT ? process.env.PORT : 3000);

app.use(cors());
app.use(morgan('dev'));

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json({}));

app.use('/api', authenticate, system);
app.use('/', express.static('dist/coach-reservation'));

const server = app.listen(app.get('port'), '0.0.0.0', function() {
	console.log(server.address());
});