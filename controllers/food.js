var food = require('../models/food');
// List of all foods
exports.food_list = async function (req, res) {
    try {
        thefoods = await food.find();
        res.send(thefoods);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: food list');
};
// for a specific food.
exports.food_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};
// Handle food create on POST.
exports.food_create_post = async function (req, res) {
    console.log(req.body)
    let document = new food();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.foodname = req.body.foodname;
    document.type = req.body.type;
    document.cost = req.body.cost;
    document.flavor = req.body.flavor;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle food delete form on DELETE.
exports.food_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
// Handle food update form on PUT.
exports.food_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: food update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.food_view_all_Page = async function (req, res) {
    try {
        thefoods = await food.find();
        console.log("njfndw")
        res.render('foods', { title: 'food Search Results', results: thefoods });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};