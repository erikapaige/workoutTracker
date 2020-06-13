// bring in mongoose
const { Schema, model } = require('mongoose')

//building Schema 
const workoutSchema = new Schema({
  {
    day: {
      // to get date of workout
      type: Date,
      // need to set new date
    },
    exercises: [{
        type: 
          {
            type: String, 
            //assign other properties 
            // assign prompt for use
          },
        name:
          {
            name: String, 
            //assign other properties
            // ask user for name?
          }, 
        duration: 
          {
            type: Number
            // ask user for number?
          },
        weight:
          {
            type: Number
          },
        distance:
          {
            type: Number
          },
        sets:
          {
            type: Number
          },
        reps:
          {
            type: Number
          }
      }]
  }
})

// exporting the model schema 
module.exports = model('Workout', workoutSchema)