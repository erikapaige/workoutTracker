// bring in the express package
const express = require('express')
// bring in package morgan
const morgan = require('morgan')
const app = express()

// static middlewear
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(require('./routes'))

// bring in the config folder that has the connection to mongoose
require('./config')
  .then(() => app.listen(3000))
  .catch(err => console.error(err))