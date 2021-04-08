const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
foodname: String,
type: String,
cost: Number,
flavor: String
})
module.exports = mongoose.model("food", foodSchema)