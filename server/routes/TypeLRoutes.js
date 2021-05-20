const Router = require('express');
const router = new Router();
const typeLController = require('../controller/TypeLController');

router.post('/', typeLController.newTypeL);



module.exports = router;