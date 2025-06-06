import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized! Redirect to login.')
    }
    return Promise.reject(error)
  }
)

export default instance
