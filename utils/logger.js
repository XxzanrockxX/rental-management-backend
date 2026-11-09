const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, '..', 'logs');

const writeLog = (fileName, message) => {
  const filePath = path.join(logsDirectory, fileName);
  const timestamp = new Date().toISOString();

  fs.appendFileSync(filePath, `[${timestamp}] ${message}\n`);
};

const logger = {
  info: (message) => writeLog('request.log', message),
  error: (message) => writeLog('error.log', message),
};

module.exports = logger;
