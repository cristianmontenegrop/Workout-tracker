var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
    day: { type: Date, default: Date.now }
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
