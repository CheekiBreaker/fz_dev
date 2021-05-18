const AppError = require('../error/AppError');
const {Personal, DataPersonal} = require('../models/models');
class PersonalController {
    async newPersonal(req, res) {
        let {sugar, self, height, weight, itogo, foodId, typeLId, typeSmId, info} = req.body;
        const personal = await Personal.create({
            sugar, self, height, weight, itogo, foodId, typeLId, typeSmId
        });
        if(info) {
            info = JSON.parse(info);
            info.forEach(i => {
                DataPersonal.create({
                    
                });
            });
        }
        res.json(personal);

    }

    async allPersonal(req, res) {
        const allPers = await allPers.findAll();
        res.json(allPers);
    }

    async onePersonal(req, res, next) {
    const {id} = req.params;
    const onePers = await onePers.findOne({
        where: {id}
    })
    res.json(onePers.rows[0]);
    }
}

module.exports = new PersonalController();