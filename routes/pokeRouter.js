var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var GJV = require('geojson-validation');

var MongoClient = require('mongodb').MongoClient;

var DEFAULT_DISTANCE = 300;

//Database handle
var db;
var pokemon;
var sightings;

// Initialize connection to MongoDB once
MongoClient.connect("mongodb://localhost:27017/TownMap", function (err, database) {
    if (err) throw err;
    db = database;
    pokemon = db.collection('Pokemon');
    sightings = db.collection('Sightings');
});

//Create the router
var pokeRouter = express.Router();

pokeRouter.use(bodyParser.json()); // support json encoded bodies
pokeRouter.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

//Default Request to show all pokemon
pokeRouter.get('/sightings/', function (req, res, next) {
    sightings.find().toArray(function (err, docs) {
        if (err) return next(err);
        res.json(docs)
    });
});

//Paramater handler for validating pokemon
pokeRouter.param('pokemon', function (req, res, next, name, what) {

    console.log(what);

    pokemon.find({name: name}).limit(1).next(function (err, doc) {
        if (err) return next(err);

        if (!doc) {
            err = new Error(name + ' is not a Pokemon');
            err.status = 400;
            return next(err);
        }

        req.pokemon = doc;

        next();
    });

});

//Route to look up pokemon and their types
pokeRouter.get('/pokemon/:pokemon([a-z]+)', function (req, res){
    res.json(req.pokemon);
});

pokeRouter.get('/sightings/@:longitude(-?\\d{1,3}.\\d{1,10}|-?\\d{1,3}),:latitude(-?\\d{1,3}.\\d{1,10}|-?\\d{1,3})(,:distance(\\d+)[m]?)?(,:pokemon([a-z]+))?', function (req, res, next) {
    var distance = (req.params.distance) ? Number(req.params.distance) : DEFAULT_DISTANCE;

    //the query
    var query = {
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [
                        Number(req.params.longitude),
                        Number(req.params.latitude)
                    ]
                },
                $maxDistance: distance
            }
        }
    };

    //If there is a pokemon add its _id to the query
    if (req.pokemon) {
        query.pokedex_id = req.pokemon._id;
    }

    //Find the nearby sightings
    sightings.find(query, {_id: 0}).toArray(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });

});

//Post request to add a pokemon sighting encoded in json format
pokeRouter.post('/sightings/', function (req, res, next) {

    pokemon.find({name: req.body.name}, {_id: 1}).limit(1).next(function (err, doc) {
        if (err) return next(err);

        if (!doc) {
            err = new Error('Not a Pokemon');
            err.status = 400;
            return next(err);
        }

        if (!req.body.location) {
            err = new Error('Location must be provided');
            err.status = 400;
            return next(err);
        }

        if (!GJV.isPoint(req.body.location)) {
            err = new Error('Location is invalid GeoJSON Point');
            err.status = 400;
            return next(err);
        }

        sightings.insert({pokedex_id: doc._id, location: req.body.location}, function (err, result) {
            if (err) return next(err);

            //Respond with success message
            res.json({message: "Sighting Registered", result: result });
        });
    });

});

module.exports = pokeRouter;

