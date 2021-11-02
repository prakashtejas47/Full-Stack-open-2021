const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')
const n = require('dotenv').config()
const secret = process.env.SECRET

loginRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(process.env.SECRET)
  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, 'bananas')

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})


loginRouter.get('/', async (request, response) => {
    const body = request.body
    console.log(body)
})
module.exports = loginRouter