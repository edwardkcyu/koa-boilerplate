const Router = require('koa-router');
const ctrl = require('../controllers').users;
const router = new Router();

router.post('/greetings', ctrl.sayHi);

module.exports = router.routes();
