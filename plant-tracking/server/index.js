const express = require('express');
const axios = require("axios");
const db = require('./model');
const cors = require('cors');

const app = express();
const PORT = 4000 || 3000;
const database = require('./connection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//-----------to api----------------

app.get('/allPlants', (req, res) => {
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

app.get('/onePlant', (req, res) => {
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

//--------to mongo server----------------
app.get('/dbPlants', (req, res) => {
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






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
