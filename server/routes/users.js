const router = require('express').Router()

const User = require('../models/user')


router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .populate("resources")
    .then(user => {
      if(user)
        res.json(user)
      else
        res.status(404).end()
    })
    .catch(error => {
      console.log(error.message)
      res.status(400).send({error: 'malformatted id', errorCode: res.statusCode})
    })
})

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => console.log(error.message))
})

router.post('/', (req, res) => {
  const body = req.body

  if (!body.name || !body.clientId) {
    return response.status(400).json({
      error: 'Content missing'
    })
  }

  const user = new User({
    name: body.name,
    discordId: body.clientId,
    balance: 0,
    resources: ["609678015c0c44ff2c80a4a4"],
  })

  user.save().then(savedUser => {
    res.json(savedUser)
  })
})


module.exports = router
