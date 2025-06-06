import Auth from "./pages/Auth"
import Layout from './Layout'
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Notification from "./pages/Notification"
import Task from "./pages/Task"
import Header from "./components/Header"
import { useEffect, useState} from "react"
import { BrowserRouter as Router,
  Routes, Route, Navigate, useNavigate
} from "react-router-dom"
import api from "./api/axios"
import { useAuth }  from "./AuthContext"
import { Alert } from "./components/Alert"
import ProtectedRoute from './ProtectedRoute'


const App = () => {
  const {
    user, setUser, setUsers,
    tasks, setTasks,loading, setLoading,
  } = useAuth()

  const navigate = useNavigate()

  // check authentication
  const checkAuth = ()=>{
    api.get('/check_auth.php')
      .then(res => {
        if (res.data.authenticated) {
          setUser(res.data.user)
          navigate("/", {replace: true})
        } else {
          setUser(null)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }
  useEffect(() => {
    const token = localStorage.getItem("access_token")
    //setIsAuthenticated(token)
    //isAuthenticated ? navigate('/') : navigate('/auth')
  }, [])


  // get users
  useEffect(() => {
    api.get('/api/users.php')
      .then(resp => {
        if (resp.data.success) {
          setUsers(resp.data.users)
        } else {
          throw new Error(resp.data.sapor)
        }
      }).catch(err => console.error(err.message))
  }, [])

  // get tasks
  useEffect(() => {
    api.get('/tasks')
      .then(resp => {
        console.log(resp.data)

        if (resp.data) {
          setTasks(resp.data)
        } else {
          throw new Error(resp.data.sapor)
        }
      }).catch(err => console.error(err.message))
  }, [])

  // Block rendering until auth is done
  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <Layout>
      <Alert />
      <div className="py-6"></div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/project/:activity_id" element={<Project />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/project/:activity_id/task/:task_id" element={<Task />} />
      </Routes>
    </Layout>
  )
}
export default App
