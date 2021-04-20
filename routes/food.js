var express = require('express');
var router = express.Router();
 
const food_controlers=require('../controllers/food')
/* GET home page. */
router.get('/',  food_controlers.food_view_all_Page);


/* GET detail food page */
router.get('/detail', food_controlers.food_view_one_Page);
/* GET create food page */
router.get('/create', food_controlers.food_create_Page);
/* GET create update page */
router.get('/update', food_controlers.food_update_Page);
/* GET create food page */
router.get('/delete', food_controlers.food_delete_Page);





 
module.exports = router;