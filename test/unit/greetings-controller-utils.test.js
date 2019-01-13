const moment = require('moment');

const { formatDate } = require('../../src/controllers/utils');

describe('formatDate', () => {
  test('format date correctly', () => {
    const date = moment([2018, 0, 1, 11, 11, 11]);

    expect(formatDate(date)).toMatchSnapshot();
  });

  test('throw error if input is null', () => {
    const date = null;

    expect(() => formatDate(date)).toThrowErrorMatchingSnapshot();
  });
});
