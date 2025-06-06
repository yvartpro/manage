import { useState } from "react"
import { DatePicker } from "../components/Day"
import { useAuth } from "../AuthContext"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import api from "../api/axios"
import { TaskList } from "./TaskList"

export const AddTask = () =>{
//states
const { id } = useParams()
const navigate = useNavigate()
const location = useLocation()
const activity = location.state?.from
const {
  user,sapor,
  setMsg, setSapor,
  connected,
  activities,
  tasks, day
} = useAuth()
const {user_id, role, domain} = user
const [task, setTask] = useState({title: "", activity_id: "", start: "", end: ""})
const [start, setStart] = useState()
const [end, setEnd] = useState()
//METHODS
//add task
const addTask = ()=>{
  if(role === "developer") {
    setSapor("Not allowed")
    setTimeout(()=>{setSapor("")},2000)
    return
  }
  const data = {...task, activity_id: id, start: start, end: end, role: role}
  api.post('/add_task.php',data)
    .then((resp)=>{
      if(resp.data.success){
        setMsg(resp.data.message)
        setTask({title: "", activity_id: "", start: "", end: ""})
        //navigate("/notifications")
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
<>
<h1 className="text-slate-600 font-bold mt-3">{activity}</h1>
{role != "developer" &&<div className="bg-slate-50 mt-4 p-3 rounded-md">
  <h2 className="py-4 text-sm font-bold text-slate-600">Add new task</h2>
  <div className="border rounded-sm p-2 mb-4">
    <p className="text-xs text-slate-600 font-medium mb-2">Title</p>
    <input
      type="text"
      value={task.title}
      onChange={(e)=>setTask(pre=>({...pre,title: e.target.value}))}
      className="border text-xs px-3 py-2 border-slate-300 rounded focus:border-sky-400 outline-none"
    />
    <div className="flex justify-start">
      <DatePicker
        props={{day:start, setDay: setStart, label: "Start: ", id: "start"}}
        className="text-sky-400"
      />
      <DatePicker
        props={{day:end, setDay: setEnd, label: "End: ", id: "end"}}
      />
    </div>
  </div>
  <div className="flex items-center gap-2">
    <button onClick={addTask} className="px-3 py-2 text-sm text-white bg-sky-500 w-full rounded hover:bg-sky-600">Add</button>
  </div>
</div>}
<TaskList/>
</>
)}
