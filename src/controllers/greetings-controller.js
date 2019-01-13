const moment = require('moment');
const HttpError = require('../lib/HttpError');
const { HTTP_STATUS } = require('../lib/constants');
const { formatDate } = require('./utils');

async function sayHi(ctx) {
  const { name } = ctx.request.body;

  if (!name) {
    throw new HttpError({
      status: HTTP_STATUS.BAD_REQUEST,
      message: 'name should not be empty'
    });
  }

  ctx.status = HTTP_STATUS.OK;
  ctx.body = {
    message: `Hi ${name}.`,
    time: formatDate(new Date())
  };
}

module.exports = { sayHi };
