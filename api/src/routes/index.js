const {Router} = require('express');
const championsRouter = require('./championsRouter')

const mainRouter = Router();

mainRouter.use('/champions', championsRouter)

module.exports = mainRouter;