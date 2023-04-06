const axios = require('axios')


const getAllChampions = async () => {
    let response = await axios('http://ddragon.leagueoflegends.com/cdn/13.7.1/data/en_US/champion.json');
    response = Object.values(response.data.data);
    return response;
}

module.exports = {getAllChampions}