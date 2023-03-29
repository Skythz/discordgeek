require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

const Resource = require('./models/resource')
const User = require('./models/user')


const session = require('express-session')
const passport = require('passport')
const discordStrategy = require('./strategies/discordStrategy')

// DB Login
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

// Routes
const resourcesRoute = require('./routes/resources')
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')

app.use(cors())

app.use(express.json())

// Using The Routes
app.use('/api/resources', resourcesRoute)
app.use('/api/users', usersRoute)
app.use('/auth', authRoute)

// Express-Session
app.use(session({
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  },
  saveUninitialized: false
}))

// Passport

app.use(passport.initialize())
app.use(passport.session())


// Redirect direct GET requests to front-end
app.get('/', (req, res) => {
  res.redirect('http://localhost:3000')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
