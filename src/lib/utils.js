const crypto = require('crypto');

const hashToSha256 = value => {
  const hash = crypto
    .createHash('sha256')
    .update(value)
    .digest('hex');
  return hash;
};

module.exports = {
  hashToSha256
};
