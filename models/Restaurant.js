const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    foodClasses: {
        type: [String],
    },
    rating: {
        type: String
    },
    numberOfRatings: {
        type: String
    }
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);