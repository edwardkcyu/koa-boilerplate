const path = require('path');
const _ = require('lodash');

const ROOT = path.resolve(__dirname, '../');
const NODE_ENV = _.defaultTo(process.env.NODE_ENV, 'development');

const isProd = NODE_ENV === 'production';
const isTest = NODE_ENV === 'test'; // test is auto set by Jest for unit test
const isDev = NODE_ENV === 'development';

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const config = {
  port: normalizePort(_.defaultTo(process.env.PORT, 3000)),

  env: {
    isDev,
    isProd,
    isTest
  },

  cors: {
    origin: '*',
    exposeHeaders: ['Authorization'],
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Authorization', 'Content-Type'],
    keepHeadersOnError: true
  }
};

if (!isTest) {
  Object.entries(config).forEach(([key, value]) => {
    if (!value) {
      console.error(`Invalid config: ${key} = ${value}`);
      process.exit(1);
    }
  });
}

module.exports = config;
