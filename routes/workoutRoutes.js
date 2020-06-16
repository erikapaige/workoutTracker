// bring in the express router
const router = require('express').Router()
// bring in the workout model
const { Workout } = require('../models')

// GET ALL workouts
router.get('/workouts/range', (req, res) => {
  Workout.find()
    //take the workout and send them back (res.json)
    .then((workout) => { 
        res.json(workout)
      })
    .catch(err => console.error(err))
})

// GET one workout and all the items
router.get('/workouts', (req, res) => {
  Workout.find(req.params.id)
    .then((workout) => res.json(workout))
    .catch(err => console.error(err))
})

// POST (ADD) one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.error(err))
})

// PUT (UPDATE, add item, remove item, modify if complete or not) one workout
router.put('/workouts/:id', (req, res) => {
  // $push method to add to an array
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((workout) => res.json(workout))
    .catch(err => console.error(err))
})

// DELETE one workout
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})


// export router
module.exports = router