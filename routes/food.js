var express = require('express');
var router = express.Router();
 
const food_controlers=require('../controllers/food')
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET home page. */
router.get('/',  food_controlers.food_view_all_Page);


/* GET detail food page */
router.get('/detail', food_controlers.food_view_one_Page);
/* GET create food page */
router.get('/create', secured, food_controlers.food_create_Page);
/* GET create update page */
router.get('/update', secured,food_controlers.food_update_Page);
/* GET create food page */
router.get('/delete', secured, food_controlers.food_delete_Page);





 
module.exports = router;