const mongoose = require('mongoose');

const myPlants = mongoose.Schema({
  plantName: {type: String, required: true},
  otherName: {type: String, required: true},
  idealLight: {type: String, required: true},
  watering: {type: String, required: true},
  toleratedLight: {type: String, required: true}
});

const MyPlants = mongoose.model('Rsvp', myPlants);

module.exports = MyPlants;