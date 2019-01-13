const logger = require('../lib/logger');
const HttpError = require('../lib/HttpError');
const { HTTP_STATUS } = require('../lib/constants');

module.exports = async (ctx, next) => {
  return next().catch(e => {
    logger.error(e);

    if (e instanceof HttpError) {
      const { status, message } = e;

      ctx.status = status;
      ctx.body = { error: { message } };
    } else {
      ctx.status = HTTP_STATUS.SERVER_ERROR;
      ctx.body = {
        error: { message: 'Server error' }
      };
    }
  });
};
