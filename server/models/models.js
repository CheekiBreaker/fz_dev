const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    middle_name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    carbindex: {type: DataTypes.REAL},
    susindex: {type: DataTypes.REAL},
    role: {type: DataTypes.STRING, defaultValue: 'user'}
});

const UserData = sequelize.define('user_data', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
});

const DataPersonal = sequelize.define('data_personal', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
});

const Personal = sequelize.define('personal', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    sugar: {type: DataTypes.INTEGER, allowNull: false},
    self: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: true},
    height: {type: DataTypes.INTEGER, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    itogo: {type: DataTypes.INTEGER, allowNull: true}
});


const Food = sequelize.define('food', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    b: {type: DataTypes.REAL, allowNull: false},
    g: {type: DataTypes.REAL, allowNull: false},
    y: {type: DataTypes.REAL, allowNull: false},
    countxe: {type: DataTypes.REAL},
    title: {type: DataTypes.STRING, allowNull: false}
});

const TypeL = sequelize.define('type_l', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    long: {type: DataTypes.STRING, allowNull: true}
});

const TypeS = sequelize.define('type_sm', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    small: {type: DataTypes.STRING, allowNull: true}
});

const Library = sequelize.define('library', {
   id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}, 
   title: {type: DataTypes.STRING, allowNull: false}, 
   text: {type: DataTypes.STRING, allowNull: false}, 
   img: {type: DataTypes.STRING, allowNull: false}, 
});



User.hasOne(UserData);
UserData.belongsTo(User);

User.hasMany(Library);
Library.belongsTo(User);

UserData.hasMany(DataPersonal);
DataPersonal.belongsTo(UserData);

Personal.hasMany(DataPersonal, {as: 'data'});
DataPersonal.belongsTo(Personal);

Food.hasOne(Personal);
Personal.belongsTo(Food);

TypeL.hasOne(Personal);
Personal.belongsTo(TypeL);

TypeS.hasOne(Personal);
Personal.belongsTo(TypeS);

module.exports = {
    User,
    UserData,
    DataPersonal,
    Food,
    Library,
    TypeL,
    TypeS,
    Personal
}

