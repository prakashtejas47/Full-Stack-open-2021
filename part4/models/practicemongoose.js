mongoose = require('mongoose')
const url = "url with password"
mongoose.connect(url)
blogSchema = {
    likes:String,
    url:String,
    author:String
}
blog = mongoose('blog',blogSchema)
export(blog)