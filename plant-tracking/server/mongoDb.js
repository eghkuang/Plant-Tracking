const mongoose = require('mongoose');

const myPlants = mongoose.Schema({
  id: {type: Number, required: true},
  idealLight: {type: String, required: true},
  latin: {type: String, required: true},
  otherName: {type: String, required: true},
  plantName: {type: String, required: true},
  tempMax:  {type: Number, required: true},
  tempMin:  {type: Number, required: true},
  toleratedLight: {type: String, required: true},
  watering: {type: String, required: true},
  // updated: { type: Date, default: Date.now },
});

const MyPlants = mongoose.model('myplants', myPlants);
module.exports = MyPlants;