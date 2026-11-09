const mongoose = require('mongoose');
const config = require('./env');

const connectDB = async () => {
  if (!config.mongoUri) {
    throw new Error('MONGODB_URI is not defined in environment variables.');
  }

  await mongoose.connect(config.mongoUri);
  process.stdout.write('MongoDB connected successfully.\n');
};

module.exports = connectDB;
