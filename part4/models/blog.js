const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://Tejas:1845Benji@cluster0.hhw2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})
  
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog

//const mongoUrl = 'mongodb://localhost/bloglist'

  