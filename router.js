const router = require("express").Router();
const { 
        getRestaurants,
        getSorting,
        getRestaurantsByFoodClass,
        searchRestaurants
        } = require("./controllers/Restaurant");

router.get("/restaurants", getRestaurants);
router.get("/get-sorting", getSorting);
router.get("/restaurants/food-class/:foodClass", getRestaurantsByFoodClass);
router.get("/search", searchRestaurants)

module.exports = router;
