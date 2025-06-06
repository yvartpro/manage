import { useState, useEffect } from "react"
import api from "../api/axios"
import { useAuth } from "../AuthContext"
import { elapsedTime } from "../date"


const Notification = ()=>{
const [logs, setLogs] = useState([])

useEffect(()=>{
  api.get('/api/logs.php')
    .then(resp=>{
      if(resp.data.success){
        setLogs(resp.data.logs)
      }else{
        throw new Error(resp.data.sapor)
      }
    }).catch(err=>
      console.error(err.message))
},[])

return(
<div className="px-4 py-4">
  <h1 className="mb-3 text-gray-700 text-sm font-bold" >Notifications</h1>
  {logs.map((log,i)=>
  <div key={i} className="flex justify-start items-top gap-1 mb-2 pb-1 border-b">
    <img src="/avatar.png" className="w-8 h-8" alt="Avatar"/>
    <p className="flex justify-between text-xs items-baseline">
      <span>{log.action}</span>
      <span className="text-10 text-slate-400">{elapsedTime(log.date_log)}</span>
    </p>
  </div>
  )}
</div>
)}

export default Notification
