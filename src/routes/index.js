const Router = require('koa-router');
const router = new Router();

const greetings = require('./greetings-router');

router.use(greetings);

module.exports = router;
