import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import './index.css'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user,setUser] = useState(null)
  const [errorMessage,setErrorMessage] = useState(null)
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  
  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setErrorMessage('Logged in')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      ) 
      console.log(user)
      console.log("hit login")
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = event =>{
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const handleCreate = event =>{
    event.preventDefault()
    blogService.create({
      "title":title,
      "author":author,
      "url":url,
      "likes":0
    })
    setErrorMessage('A new blog ' + title + ' by ' + author + ' added')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    setBlogs(blogs.concat({
      "title":title,
      "author":author,
      "url":url,
      "likes":0
    }))
    setTitle('')
    setAuthor('')
    setUrl('')
  }
  const loginForm = ()=>(
    <div>
    <form onSubmit={handleLogin}>
      <Notification message={errorMessage} />
          <h2>Log in to application</h2>
          <div>
            username
              <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
              <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
    </div>
  )


  if (user === null) {
    return (
      <div>
        {loginForm()}
      </div>
    )
  }

  return (
    <div>
      <Notification message={errorMessage} />
      <h2>Blogs</h2>
      <p>{user.name} logged-in</p>
      <form onSubmit={handleLogout}>
        <button type="submit">logout</button>
      </form>
      <h2>Create New</h2>
      <form onSubmit={handleCreate}>
        <div>
            Title: 
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
        </div>
        <div>
            Author:
            <input
              type="text"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
        </div>
        <div>
            Url:
            <input
              type="text"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
        </div>
        <button type="submit">create</button>
      </form>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}

    </div>
  )
}
export default App