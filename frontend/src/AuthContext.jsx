import { createContext, useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import api from "./api/axios"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export const login = async (token) =>{
  await localStorage.setItem('access_token',token)
}

const AuthProvider = ({children}) =>{
  const [user, setUser ] = useState({})
  const [users, setUsers ] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sapor, setSapor] = useState("")
  const [msg, setMsg] = useState("")
  const [connected, setConnected] = useState(false)
  const [isNotifOpen, openNotif] = useState(false)
  const [isHome, setIsHome] = useState(true)
  const [activities, setActivities] = useState([])
  const [tasks, setTasks] = useState([])
  const [day, setDay] = useState()
  const [act_tasks, setActTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const checkAuth = ()=>{
    setLoading(true)
    api.get('/check_auth.php')
      .then(res => {
        console.log(res)
        if (res.data.authenticated) {
          setUser(res.data.user)
          setConnected(true)
        } else {
          setUser(null)
        }
        setLoading(false)
      })
      .catch((err) => console.error(err))
      .finally(()=>
        setLoading(false)
      )
  }
  const background = [
    "bg-sky-100",
    "bg-cyan-100",
    "bg-green-100",
    "bg-orange-100",
    "bg-sky-200",
    "bg-pink-100"
  ]
console.log(isAuthenticated)
return(
  <AuthContext.Provider
    value={{
      user, setUser,
      loading, setLoading,
      users, setUsers, checkAuth,
      sapor, setSapor,
      msg, setMsg, background,
      connected, setConnected,
      isNotifOpen, openNotif,
      isHome, setIsHome,
      activities, setActivities,
      tasks, setTasks,
      day, setDay,
      act_tasks, setActTasks,
      isAuthenticated,
      setIsAuthenticated,
     }}
  >
    {children}
  </AuthContext.Provider>
)}

export default AuthProvider

export const Protected = ({children})=> false ? children : <Navigate to="/" replace/>
