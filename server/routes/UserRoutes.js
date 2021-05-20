const Router = require('express');
const router = new Router();
const userController = require('../controller/UserController');

router.post('/rega', userController.registation);
router.post('/login', userController.login);
router.get('/check', userController.checkRole);


module.exports = router;