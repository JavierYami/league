const express = require ('express');
const morgan = require ('morgan')

const server = express();

server.use(morgan('dev'));


server.get('/',  (req, res) => {
    res.status(200).send('ok')
})
    

module.exports = server;