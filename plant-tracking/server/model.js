const { key, host } = require('../config.js');
const mdb = require('./mongoDb');

// @flow

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

const myPlants = (callback) => {
    console.log('hello??? my plants server?');
    mdb.myPlants.find({})
        .then((results) => {
        console.log('results', results);
        callback(null, results);
        })
        .catch((err) => {
        console.log('error', err)
        callback(err);
        })
  };

module.exports = { allPlants, onePlant };
