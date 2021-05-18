
const AppError = require('../error/AppError');
const {Food} = require('../models/models');
class FoodController {
    async newFood(req, res) {
        const {b, g, y, countxe, title} = req.body;
        const food = await Food.create({
            b,g,y,countxe,title
        });
        res.json(food);
    }

    async allFood(req, res) {

    }

    async oneFood(req, res, next) {

    }
}

module.exports = new FoodController();