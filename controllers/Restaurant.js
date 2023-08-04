const Restaurant = require("../models/Restaurant");

const getRestaurants = (req, res) => {
    Restaurant.find()
        .then(restaurants => {
            res.json(restaurants);
        })
        .catch(err => {
            res.send(err);
        });
};

const getSorting = (req, res) => {
    const sortParam = req.query.sortParam || "rating";
    Restaurant.find().sort({ [sortParam]: -1 }).then(restaurants => {
        res.json(restaurants);
    }).catch(err => {
        res.send(err);
    });    
};

const searchRestaurants = (req, res) => {
    const query = req.query.query;
    Restaurant.find({ $text: { $search: query } }).then(restaurants => {
        res.json(restaurants);
    }).catch(err => {
        res.send(err);
    });    
};

const getRestaurantsByFoodClass = (req, res) => {
    const foodClass = req.params.foodClass;
    Restaurant.find({ foodClasses: foodClass }).then(restaurants => {
        res.json(restaurants);
    }).catch(err => {
        res.send(err);
    });    
};

module.exports = {
    getRestaurants,
    getSorting,
    searchRestaurants,
    getRestaurantsByFoodClass
}