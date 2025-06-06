import { useState, useEffect } from "react"
import { useAuth } from "../AuthContext"
import { Navigate } from "react-router-dom"
import api from "../api/axios"
import Carousel from "../components/Carousel"
import Notification from "../components/Notification"
import { Card } from "../components/Card"
import { DatePicker } from "../components/Day"
import {AddTask } from "../components/AddTask"
import { fetchUsers } from "../getters"

const Dashboard = ()=>{
const { setActivities } = useAuth()

useEffect(()=>{
  api.get('/acts')
    .then(resp=>{
      if(resp.data.success){
        setActivities(resp.data.activities)
      }else{
        throw new Error(resp.data.sapor)
      }
    })
  .catch(err=>console.error(err.message))
},[])

return(
<>
  <Home/>
</>
)}
export default Dashboard

/***************************************/
/*+++++++++++++++++++++++++++++++++++++*/
/***************************************/

//HOME COMPONENT IS HERE INSIDE
const Home = ()=>{
//states
const {
  user, setUser,sapor,
  setMsg, setSapor,
  connected,
  activities, setActivities,
  tasks, day, background,
} = useAuth()
const {id, role, domain} = user
const [users, setUsers] = useState([])
const [activity, setActivity] = useState("")
const [task, setTask] = useState({title: "", activity_id: "", start: "", end: ""})
const [start, setStart] = useState()
const [end, setEnd] = useState()


//fetch users
useEffect(()=>{
  api.get('/api/users.php')
    .then(resp => {
      setUsers(resp.data.users)
    })
    .catch(err=>console.error(err))
},[connected])


//add activity
const addActivity = ()=>{
  if(role != "admin") {
    setSapor("Not allowed")
    setTimeout(()=>{setSapor("")},2000)
    return
  }
  const data = {activity: activity, user_id: id, role: role }
  api.post('/add_activity.php', data)
    .then((resp)=>{
      if(resp.data.success){
        setActivity("")
        //fetchActivities()
        setMsg(resp.data.message)
      }else{
        throw new Error(resp.data.sapor)
      }
    }
    )
    .catch(err=>setSapor(err.message))
    .finally(setTimeout(()=>{
      setSapor("")
      setMsg("")
    },2000))
}

//add task
const addTask = ()=>{
  if(role === "developer") {
    setSapor("Not allowed")
    setTimeout(()=>{setSapor("")},2000)
    return
  }
  const data = {...task, start: start, end: end, role: role}
  api.post('/add_task.php',data)
    .then((resp)=>{
      if(resp.data.success){
        setMsg(resp.data.message)
      }else{
        throw new Error(resp.data.sapor)
      }
    }
    )
    .catch(err=>setSapor(err.message))
    .finally(setTimeout(()=>{
      setSapor("")
      setMsg("")
    },2000))
}
return(
  <div className="px-4 py-4">
    <h1 className="text-gray-700 text-sm font-bold">Programs</h1>
    <div className="mt-2">
      <Carousel/> {/*carousel elements*/}
      <h2 className="pt-4 text-xs font-bold text-slate-600">{role==="admin" && "Add activity"}</h2>
      {role === "admin" &&
      <div className="py-1">
        <div className="bg-sky-50 px-4 py-4 rounded-md shadow-sm">
            <p className="text-sm text-slate-600 font-medium mb-2">Title</p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={activity}
                onChange={(e)=>setActivity(e.target.value)}
                className="border text-xs px-3 py-2 border-slate-300 rounded focus:border-sky-400 outline-none"
              />
              <button onClick={addActivity} className="px-3 py-2 text-sm text-white bg-sky-500 rounded hover:bg-sky-600">Add</button>
          </div>
        </div>
      </div>}
    </div>
    <h1 className="text-gray-700 text-sm font-bold mb-2 mt-3">Tasks</h1>
    <div className="grid grid-cols-2 gap-3">
    {tasks.map((task,i)=>{
      const bg = background[Math.floor(Math.random() * background.length)]
      return(
        <Card key={i} props={{task, bg}}/>
    )})}
    </div>
  </div>
)}
