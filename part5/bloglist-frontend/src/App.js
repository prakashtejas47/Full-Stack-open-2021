import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import LoginForm from './components/LoginForm'
import CreateForm from './components/CreateForm'
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
  const [createVisible, setCreateVisible] = useState(false)


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
  
  const createForm = () => {
    const hideWhenVisible = { display: createVisible ? 'none' : '' }
    const showWhenVisible = { display: createVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setCreateVisible(true)}>create</button>
        </div>
        <div style={showWhenVisible}>
        <CreateForm
         handleCreate={handleCreate}
         title={title}
         setTitle={setTitle}
         author={author}
         setAuthor={setAuthor}
         url={url}
         setUrl={setUrl}
        />
          <button onClick={() => setCreateVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }


  if (user === null) {
    return (
      <div>
        <LoginForm
          handleLogin={handleLogin}
          Notification={Notification}
          errorMessage={errorMessage}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
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
      {createForm()}
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} put={blogService.put} getAll={blogService.getAll} remove={blogService.remove}/>
      )}

    </div>
  )
}
export default App