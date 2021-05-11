const Router = require('express');
const router = new Router();
const typeSController = require('../controller/TypeSController');

router.post('/', typeSController.newTypeS);



module.exports = router;