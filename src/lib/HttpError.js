const { HTTP_STATUS } = require('./constants');
class HttpError extends Error {
  constructor({ status = HTTP_STATUS.SERVER_ERROR, message }) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = HttpError;
