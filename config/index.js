// creating connection to mongoose workout
module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI)