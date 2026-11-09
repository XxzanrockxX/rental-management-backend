const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const config = require('../config/env');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AppError('Authentication required.', 401));
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, config.jwtSecret);

    req.user = decoded;

    return next();
  } catch (error) {
    return next(new AppError('Invalid or expired token.', 401));
  }
};

module.exports = authMiddleware;
