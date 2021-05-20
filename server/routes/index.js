const Router = require('express');
const router = new Router();
const foodRouter = require('./FoodRoutes');
const libraryRouter = require('./LibraryRoutes');
const typelRouter = require('./TypeLRoutes');
const typesRouter = require('./TypeSRoutes');
const userRouter = require('./UserRoutes');
const personalRouter = require('./PersonalRoutes');



router.use('/use', userRouter);
router.use('/food', foodRouter);
router.use('/library', libraryRouter);
router.use('/long', typelRouter);
router.use('/small', typesRouter);
router.use('/personal', personalRouter);


module.exports = router;