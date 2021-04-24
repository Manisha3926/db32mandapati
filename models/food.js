const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
foodname: {
    type:String,
    required:[true,"foodname is needed"]
},
type: {
    type:String,
    required:[true,"foodtype is needed"]
},
cost: {
    type: Number,
    required: [true,"Price of the fish is required"],
    min:[1200,"Price Should be minimum of 1200$ "],
    max:[5300,"Price Cannot be greater than 5300$ "]

},
flavor: String
})
module.exports = mongoose.model("food", foodSchema)