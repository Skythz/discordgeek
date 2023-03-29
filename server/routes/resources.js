const router = require('express').Router()

const Resource = require('../models/resource')


router.get('/', (req, res) => {
  Resource.find({}).then(resources => {
    res.json(resources)
  })
})

router.get('/:id', (req, res) => {

  Resource.findById(req.params.id)
    .populate("owner")
    .then(resource => {
      if(resource)
        res.json(resource)
      else
        res.status(404).end()
    })
    .catch(error => {
      console.log(error.message)
      res.status(400).send({error: 'malformatted id', errorCode: res.statusCode})
    })
})

router.delete('/:id', (req, res) => {
  Resource.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => console.log(error.message))
})

router.post('/', (req, res) => {
  const body = req.body

  if (!body.name || !body.desc ||  !body.owner) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const resource = new Resource({
    name: body.name,
    desc: body.desc,
    owner: body.owner,
    date: new Date(),
    sold: 0,
  })

  resource.save().then(savedResource => {
    res.json(savedResource)
  })
})


module.exports = router
