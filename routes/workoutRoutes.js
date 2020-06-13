// bring in the express router
const router = require('express').Router()
// bring in the workout model
const { Workout } = require('../models')

// GET workouts
router.get('/', (req, res) => {
  Person.find()
    //take the people and send them back (res.json)
    .then(people => res.json(people))
    .catch(err => console.error(err))
})

// GET one workout and all the items
router.get('/workout/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// POST (ADD) one workout
router.post('/workout', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// PUT (UPDATE, add item, remove item, modify if complete or not) one workout
router.put('/workout/:id', (req, res) => {
  // $push method to add to an array
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one workout
router.delete('/workout/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})


// export router
module.exports = router