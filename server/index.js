require('dotenv').config();
const express = require('express');
/*const models = require('./models/models');*/
const router = require('./routes/index');
const errorMiddleware = require('./middleware/ErrorMiddleware');
const path = require('path');
const fileUpload = require('express-fileupload');
const sequelize = require('./database');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/app', router);


//последние Middleware
app.use(errorMiddleware);

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, console.log(PORT));
    } catch(e) {
        console.log(e);
    }
}

startApp();