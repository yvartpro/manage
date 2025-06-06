import Auth from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Notification from "./pages/Notification"
import Task from "./pages/Task"
import Header from "./components/Header"
import { useEffect,
useState} from "react"
import { BrowserRouter as Router,
  Routes, Route, Navigate
} from "react-router-dom"
import api from "./api/axios"
import { useAuth, AuthRoute, ProtectedRoute }  from "./AuthContext"
import { Alert } from "./components/Alert"

const App = () =>{

const {
  user, setUser, setUsers,
  tasks, setTasks,
} = useAuth()
const [loading, setLoading] = useState(true)

//check authentication
useEffect(() => {
  api.get('/check_auth.php')
    .then(res => {
      if (res.data.authenticated){
        setUser(res.data.user)
        setLoading(false)
      }else{
        setUser(null)
      }
        setLoading(false)
    })
    .catch(()=>{
        setLoading(false)
    })
},[])

//get users and set
useEffect(() => {
  api.get('/api/users.php')
    .then(resp => {
      if (resp.data.success){
        setUsers(resp.data.users)
      }else{
        throw new Error(resp.data.sapor)
      }
    }).catch(err=>console.error(err.message))
},[])

//get task list all
useEffect(() => {
  api.get('/api/tasks.php')
    .then(resp => {
      if (resp.data.success){
        setTasks(resp.data.tasks)
      }else{
        throw new Error(resp.data.sapor)
      }
    }).catch(err=>console.error(err.message))
},[])
if(loading) return <p className="text-center font-bold">Please wait...</p>
return(
  <>
  <Alert/>
  { user && <Header/>}
  <div className="py-6"></div>
  <Routes>
    <Route
      path="/auth"
      element={ <Auth/> }
    />
    <Route
      path="/"
      element={ <AuthRoute><Dashboard/></AuthRoute> }
    />
    <Route
      path="/project/:id"
      element={ <AuthRoute><Project/></AuthRoute> }
    />
    <Route
      path="/notifications"
      element={ <AuthRoute><Notification/></AuthRoute> }
    />
    <Route
      path="/project/:id/task/:id"
      element={ <AuthRoute><Task/></AuthRoute> }
    />
  </Routes>
 </>
)}

export default App
