const dotenv = require('dotenv');

dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};

module.exports = config;
