const AppError = require('../utils/AppError');
const logger = require('../utils/logger');

const errorMiddleware = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof AppError)) {
    error = new AppError('Internal server error.', 500);
  }

  logger.error(
    `${req.method} ${req.originalUrl} - ${error.statusCode} - ${err.message}`,
  );

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
};

module.exports = errorMiddleware;
