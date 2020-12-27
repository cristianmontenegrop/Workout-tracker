const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  totalDuration: { type: Number, required: false },
  exercises: [{
    type: { type: String, required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
  }],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
