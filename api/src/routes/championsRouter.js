const {Router} = require('express');

const championsRouter = Router();

championsRouter.get('/', (req, res) => { 
    res.send('NIY: Esta ruta me trae todos los campeones')
});

championsRouter.get('/:championId', (req, res) => { 
    res.send('NIY: Esta ruta me trae un campeon por determinado id')
});

module.exports = championsRouter;