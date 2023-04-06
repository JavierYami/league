const {Router} = require('express');
const {getAllChampions} = require ('./controllers')

const championsRouter = Router();

championsRouter.get('/', async (req, res)   => { 
    try {
        let champions =  await getAllChampions();
        res.status(200).json(champions)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

championsRouter.get('/:championId', (req, res) => { 
    res.send('NIY: Esta ruta me trae un campeon por determinado id')
});

module.exports = championsRouter;