import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api/axios'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await api.get('/profile')
        console.log(res.data.user.nickname)
        if (res.data?.user?.nickname) {
          setAuthorized(true)
        } else {
          navigate('/auth')
        }
      } catch (err) {
        console.error('Not authorized:', err)
        navigate('/auth')
      } finally {
        setLoading(false)
      }
    }

    verifyUser()
  }, [navigate])

  if (loading) return <div>Loading...</div>
  return authorized ? children : null
}

export default ProtectedRoute
