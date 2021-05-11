const Router = require('express');
const router = new Router();
const foodController = require('../controller/FoodController');

router.post('/', foodController.newFood);
router.get('/', foodController.allFood);
router.get('/:id', foodController.oneFood);
router.put('/', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);


module.exports = router;