const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('../error/AppError');
const {User, UserData} = require('../models/models');

const onJWT = (id, first_name, middle_name, last_name, email, role) => {
    return jwt.sign({
        id, first_name, middle_name, last_name, email, role
       },
       process.env.SECRET_KEY,
       {expiresIn: '12h'}
    ); 
}

class UserController {
    async registation(req, res, next) {
        const {first_name, middle_name, last_name, email, password, role} = req.body;
        if(!email || !password) {
            return next(AppError.badRequest('Не правильный email или пароль'));
        }
       const userCheck = await User.findOne({
           where: {email}
       });
       if(userCheck) {
            return next(AppError.badRequest('Такой пользователь уже есть'));
       }
       const hashPassword = await bcrypt.hash(password, 7);
       const user = await User.create({first_name, middle_name, last_name, email, password: hashPassword, role});
       const userData = await UserData.create({userId: user.id});
       const token = onJWT(user.id, user.first_name, user.middle_name, user.last_name,
        user.email, user.role);
       res.json({token});
    }

    async login(req, res) {
        
    }

    async checkRole(req, res, next) {
    
    }


}

module.exports = new UserController();