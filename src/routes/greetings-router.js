const Router = require('koa-router');
const ctrl = require('../controllers').greetings;
const router = new Router();

router.post('/greetings', ctrl.sayHi);

module.exports = router.routes();
