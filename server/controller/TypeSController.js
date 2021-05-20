const AppError = require('../error/AppError');
const {TypeS} = require('../models/models');
class TypeSController {
    async newTypeS(req, res) {
        const {small} = req.body;
        const typeS = await TypeS.create({small});
        res.json(typeS);
    }

}

module.exports = new TypeSController();