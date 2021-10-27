const express = require('express')
const morgan = require('morgan')
const app = express()

const cors = require('cors')

app.use(cors())

let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
  response.json(notes)
})

app.get('/info', (request, response) => {
 // console.log(request.get('Date'))
 // console.log(response.params)
  response.send(
    `<p>Phonebook has info for ${notes.length} people <br/> ${Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
 })


 app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.use(express.json())
app.use(morgan('tiny'))
//...

app.post('/api/persons', (request, response) => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id)) 
      : 0
  
    const note = request.body
    if (notes.filter(n=>n['name']===note['name']).length>0){
      return response.status(400).json({error: 'name already exists'})
    }
    if (!(('name' in note) && ('number' in note))){
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    note.id = Math.floor(Math.random() * 5000)
  
    notes = notes.concat(note)
  
    response.json(note)
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})