const AppError = require('../error/AppError');
const {TypeL} = require('../models/models');
class TypeLController {
    async newTypeL(req, res) {
        const {long} = req.body;
        const typeL = await TypeL.create({long});
        res.json(typeL);
    }

}

module.exports = new TypeLController();