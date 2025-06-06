import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../api/axios"
import { useAuth } from "../AuthContext"
import { shortDate } from "../shortDate"


export const TaskList = ()=>{
const { activity_id } = useParams()
const navigate = useNavigate()
const { user } = useAuth()
const { role, nickname } = user
const [ tasks, setTasks ] = useState([])
//get related tasks
useEffect(()=>{
  api.get(`/api/act_tasks.php?activity=${activity_id}`)
    .then(resp=>{
      if(resp.data.success){
        setTasks(resp.data.tasks)
      }else{
        throw new Error(resp.data.sapor)
      }
    })
    .catch(err=>console.error(err.message))
},[])
return(
<div className="py-4">
  <h2 className="text-sm text-slate-600 font-medium">{role === "developer" ? "Task list" : "Manage tasks"}</h2>
  {tasks ? tasks.map((task,i)=>{
    const {task_id, title, status, start, end, user_count, user_names } = task
    const names = user_names?.split(',').map(name => name.trim());
    return(
    <div key={i} className="flex gap-4 py-1 border-b
b">
      <div className="w-min-width">
        <p className="text-xs">{shortDate(start)}</p>
        <p className="text-xs">{shortDate(end)}</p>
      </div>
      <div className="flex-1 border-s-2 pl-1">
        <div className="flex justify-between">
          <p className="text-sm text-slate-700">{title}</p>
          <div>
            <p className="text-xs text-slate-400">{status}</p>
            <button onClick={()=>navigate(`task/${task_id}`)} className="text-10 text-white bg-sky-500 px-2 py-1 rounded-xl">view</button>
          </div>
        </div>
        <div className="">
          <p className="text-xs text-slate-400">{names ? names?.map(n=>n).join(", ") : user_count}</p>
        </div>
      </div>
    </div>
  )}) :
    <p>No taks assiciated</p>
  }
</div>
)}
