const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { dataRouter } = require('./routes');

const _mainErrorHandler = require('./errors/mainErrorHandler');
const { _configureCors } = require('./helpers/cors.configs');

const app = express();

const formatLogger = app.get('env') === 'developmet' ? 'dev' : 'short';

app.use(helmet());

app.use(express.json());
app.use(logger(formatLogger));
app.use(cors({ origin: _configureCors }));

app.use(express.urlencoded({ extended: true }));

app.use('/data', dataRouter);

app.use(_mainErrorHandler);

module.exports = app;
