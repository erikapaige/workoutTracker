// bring in the express package
const express = require('express')
// bring in path, join method for public middleware
const { join } = require('path')

const app = express()

// static middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(require('./routes'))

// bring in the config folder that has the connection to mongoose
require('./config')
  .then(() => app.listen(3000))
  .catch(err => console.error(err))