// creating connection to mongoose workout
module.exports = require('mongoose').connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})