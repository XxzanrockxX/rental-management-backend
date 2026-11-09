const app = require('./app');
const connectDB = require('./config/db');
const config = require('./config/env');

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      process.stdout.write(
        `Server running in ${config.nodeEnv} mode on port ${config.port}\n`,
      );
    });
  } catch (error) {
    process.stderr.write(`Server startup failed: ${error.message}\n`);
    process.exit(1);
  }
};

startServer();
