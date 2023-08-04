const router = require("express").Router();
const { 
        getRestaurants,
        getSorting,
        getRestaurantsByFoodClass
        } = require("./controllers/Restaurant");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/restaurants", getRestaurants);
router.get("/get-sorting", getSorting);
router.get("/restaurants/food-class/:foodClass", getRestaurantsByFoodClass)

module.exports = router;
