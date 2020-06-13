require('dotenv').config()
// bring in the express package
const express = require('express')
// bring in path, join method for public middleware
const { join } = require('path')

const app = express()

// static middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

//route to render html pages with localhost
app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname,
    './public/exercise.html'))
})
app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname,
    './public/stats.html'
  ))
})
//route to connect * with index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname,
    'index.html'
  ))
})

// bring in the config folder that has the connection to mongoose
require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.error(err))