import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = '/api/blogs'

const Blog = ({blog,put,getAll,remove}) => {
  const handleLike = async () =>{
    put(
      {
        "_id": blog._id,
        "likes": blog.likes + 1
      })
  }

  const handleRemove = async () =>{
    console.log('removing')
    remove(blog)
  }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [detailsVisible, setDetailsVisible] = useState(false)
  const showDetails = (blog) => {
    const hideWhenVisible = { display: detailsVisible ? 'none' : '' }
    const showWhenVisible = { display: detailsVisible ? '' : 'none' }
  
    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setDetailsVisible(true)}>view</button>
        </div>
        <div style={showWhenVisible}>
        <button onClick={() => setDetailsVisible(false)}>hide</button>
        <p>{blog.url}</p><p>likes {blog.likes}<button onClick={handleLike}>like</button></p>
        <p><button onClick={handleRemove}>remove</button></p>
        </div>
      </div>
    )
  }

  return(
  <div style={blogStyle}>
    <div>
      {blog.title} {blog.author} {showDetails(blog)}
    </div>  
  </div>
  )
}

export default Blog