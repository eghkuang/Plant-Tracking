const path = require('path');
const express = require('express');
const axios = require("axios");
const db = require('./model.js');

const app = express();
// const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/api/allPlants', (req, res) => {
    //TODO - your code here!
    console.log('api/allPlants?');
    // db.allPlants((err, results) => {
    //     console.log('plant data?', results.data);
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).send(results.data);
    //     }
    // });
    axios.request(db.allPlants)
        .then(function (response) {
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.error(error);
            res.status(404).send(error);
        });
});

app.get('/api/onePlant', (req, res) => {
    //TODO - your code here!
    // db.onePlant(req.query, (err, results) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     } else {
    //         res.status(200).send(results);
    //     }
    // });
    axios.request(db.onePlant)
        .then(function (response) {
            console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.error(error);
            res.status(404).send(error);
        });
});

//TODO - add additional route handlers as necessary

// app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
// });
