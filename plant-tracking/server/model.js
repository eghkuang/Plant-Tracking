const { key, host } = require('../config.js');
const db = require('./mongoDb');
const mongoose = require ('mongoose')

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
    db.find({})
        .then((results) => {
        console.log('model myplants results', results);
        callback(null, results);
        })
        .catch((err) => {
        console.log('error', err)
        callback(err);
        })
  };

const addPlant = (req, callback) => {
    console.log('what is req', req)
    console.log('db:', db);
    let id = {id: req.id}
    db.findOneAndUpdate(id, req, {
      upsert: true
    })
      .then((results) => {
        console.log('results', results);
        callback(null, results);
      })
      .catch((err) => {
        console.log('error', err)
        callback(err);
      })
  };

module.exports = { allPlants, onePlant, myPlants, addPlant };
