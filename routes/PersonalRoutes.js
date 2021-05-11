const Router = require('express');
const router = new Router();
const personalController = require('../controller/PersonalController');

router.post('/', personalController.newPersonal);
router.get('/', personalController.allPersonal);
router.get('/:id', personalController.onePersonal);
router.put('/', personalController.updatePersonal);
router.delete('/:id', personalController.deletePersonal);


module.exports = router;