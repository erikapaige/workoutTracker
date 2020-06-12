// creating connection to mongoose workoutdb
module.exports = require('mongoose').connect('mongodb://localhost/workoutsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})