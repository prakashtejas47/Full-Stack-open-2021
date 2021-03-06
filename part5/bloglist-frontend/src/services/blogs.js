import axios from 'axios'
const baseUrl = '/api/blogs/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject =>{
  const config = {
    headers: { Authorization: token },
  }
  console.log(baseUrl)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const put = async  newObject =>{
  const config = {
    headers: { Authorization: token },
  }
  console.log(baseUrl)
  const response = await axios.put(baseUrl + newObject._id, newObject, config)
  return response.data
}

const remove = async blog =>{
  const config = {
    headers: { Authorization: token },
  }
  console.log('about to remove')
  const response = await axios.delete(baseUrl + blog._id,config)
  return response.data
}

export default { getAll,setToken,create,put,remove}