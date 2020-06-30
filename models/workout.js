var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    image: { type: String, required: true },
    description: { type: String, required: true },
    rating: Number,
    date: { type: Date, default: Date.now }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
