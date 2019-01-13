const moment = require('moment');

function formatDate(date) {
  if (!date) {
    throw new Error('date should not be null');
  }

  return moment(date).format('YYYY-MM-DD hh:mm:ss');
}

module.exports = {
  formatDate
};
