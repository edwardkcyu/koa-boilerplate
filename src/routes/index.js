const Router = require('koa-router');
const router = new Router();

const users = require('./users-router');
const externalApis = require('./external-api-router');

router.use(users);
router.use(externalApis);

module.exports = router;
