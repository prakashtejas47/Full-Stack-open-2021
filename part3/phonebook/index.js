require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()

const Person = require('./models/person')

const cors = require('cors')

app.use(cors())

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})



app.get('/info', (request, response) => {
  Person.find({}).then(persons => {
    response.send(`<p>Phonebook has info for ${Object.keys(persons).length} people <br/> ${Date()}</p>`)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('build'))

app.put('/api/persons/:id', (request, response, next) => {
  console.log("reached")
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

/*
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
*/

app.post('/api/persons', (request, response,next) => {

    const person = request.body

    /*
    if (notes.filter(n=>n['name']===person['name']).length>0){
      return response.status(400).json({error: 'name already exists'})
    }
    

    if (!(('name' in person) && ('number' in person))){
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
    */
    const p = new Person({
      name: person.name,
      number: person.number
    })

    p.save().then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error=>next(error))
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})