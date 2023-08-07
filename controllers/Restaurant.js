const Restaurant = require("../models/Restaurant");

const uniqueArray = array => [...new Set(array)];

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

const searchRestaurants = async (req, res) => {
    const query = new RegExp('^' + req.query.query, 'i');
    const allItems = await Restaurant.find({
      $or: [
        { name: { $regex: query } },
        { foodClasses: { $regex: query } }
      ]
    });
    if (!allItems || allItems.length === 0) {
      res.status(200).json({err: "No item found"});
      return;
    }
    res.status(200).send(allItems);    
};

const getRestaurantsByFoodClass = (req, res) => {
    const foodClass = req.params.foodClass;
    Restaurant.find({ foodClasses: foodClass }).then(restaurants => {
        res.json(restaurants);
    }).catch(err => {
        res.send(err);
    });    
};

const getAllFoodClasses = (req, res) => {
    Restaurant.find()
        .then(restaurants => {
            let allFoodClasses = [];

            restaurants.forEach(restaurant => {
                allFoodClasses = allFoodClasses.concat(restaurant.foodClasses);
            });

            allFoodClasses = uniqueArray(allFoodClasses);

            res.json(allFoodClasses);
        })
        .catch(err => {
            res.send(err);
        });
};


module.exports = {
    getRestaurants,
    getSorting,
    searchRestaurants,
    getRestaurantsByFoodClass,
    getAllFoodClasses
}