const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors({
  origin: config.clientUrl,
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Rental Management API is running.',
  });
});

app.use(errorMiddleware);

module.exports = app;
