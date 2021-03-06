// bring in mongoose
const { Schema, model } = require('mongoose')

// building Schema 
// think about virtual properties, items do not want user to see, that would help gain total value
const workoutSchema = new Schema({
    // newDate(), needs date of workout
    day: {
      type: Date, default: () => new Date ()
    },
    // all exercises belong to workout, so add via an array of objects to be stored 
    exercises: [{
      // specify data keys (properties) allowed on exercise
        type: 
          {
            type: String, 
            required: true
            // ask user for type
          },
        name:
          {
            type: String, 
            required: true
            //assign other properties
            // ask user for name?
          }, 
        duration: 
          {
            type: Number,
            required: true
            // ask user for number?
          },
        // items below can't be required because 'cardio' does not use them as properties
        weight:
          {
            type: Number
          },
        distance:
          {
            type: Number
          },
        reps:
          {
            type: Number
          },
        sets:
          {
            type: Number
          }
      }]
  }, {
    //virtual value duration (to get total value)
    duration: true,
    // virtual value weight
    weight: true,  
    // put virtuals on object returns
    distance: true, 
    // put virtuals on object returns
    toJSON: {
      virtuals: true
    }
  })

  // writing virtual property via getter (to retrieve total duration)
  workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((d, exercise) => d + exercise.duration, 0)
  })

  // writing virtual property via getter (to retrieve total weight)
  workoutSchema.virtual('totalWeight').get(function () {
    return this.exercises.reduce((w, exercise) => w + exercise.weight, 0)
  })

  // writing virtual property via getter (to retrieve total distance)
  workoutSchema.virtual('totalDistance').get(function () {
    return this.exercises.reduce((di, exercise) => di + exercise.weight, 0)
  })

// exporting the model schema 
module.exports = model('Workout', workoutSchema)