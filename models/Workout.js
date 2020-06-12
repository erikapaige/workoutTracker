const { Schema, model } = require('mongoose')

module.exports = model('Workout', new Schema(
  {
    day: {
      // to get date of workout
      type: Date,
      // need to set new date
    },
    exercises: [
      {
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
            // assign prompt for user
          }, 
        duration: 
          {
            type: Number, 
            // assign prompt 
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
      }    
    ]
}))
