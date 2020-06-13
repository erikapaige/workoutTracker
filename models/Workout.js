// bring in mongoose
const { Schema, model } = require('mongoose')

// building Schema 
// think about virtual properties, items do not want user to see, that would help gain total value
// 
const workoutSchema = new Schema({
  {
    // newDate(), needs date of workout
    day: {
      type: Date,
      // need to set new date
    },
    // all exercises belong to workout, so add via an array of objects to be stored 
    exercises: [{
      // specify data keys (properties) allowed on exercise
        type: 
          {
            type: String, 
            required: true
            // assign prompt for use
          },
        name:
          {
            name: String, 
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
        weight:
          {
            type: Number,
            required: true
          },
        distance:
          {
            type: Number,
            required: true
          },
        reps:
          {
            type: Number,
            required: true
          },
        sets:
          {
            type: Number,
          required: true
          }
      }]
  }
})

// exporting the model schema 
module.exports = model('Workout', workoutSchema)