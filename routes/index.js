// creating express router
const router = require('express').Router()

// require workoutRoutes
router.use('/api', require('./workoutRoutes.js'))

module.exports = router