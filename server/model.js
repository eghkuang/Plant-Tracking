const { key, host } = require('../config.js');

const allPlants = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/all',
    headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': host
    }
};

const onePlant = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/common/silvervase',
    headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': host
    }
};

module.exports = { allPlants, onePlant };
