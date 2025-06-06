import { useState, useEffect } from "react"
import {useAuth} from "../AuthContext"
import { DropDown } from "../components/DropDown"
import { useParams, useNavigate } from "react-router-dom"
import api from "../api/axios"

const Task = ()=>{
const {
user, tasks, users,
sapor, setSapor, msg, setMsg,
} = useAuth()
const { role, id, nickname } = user
const { task_id } = useParams()
const navigate = useNavigate()
const [ data, setData ] = useState({user_id: "", task_id: task_id, role: user.role}) //sets the object task_user
//handle selection
const selectUser = (user)=> setData(prev=>({...prev,user_id:user.id}))
//assign user to task
const assignUser = ()=>{
  api.post("/assign_user.php",data)
    .then(resp=>{
      if(resp.data.success){
        setMsg(resp.data.message)
        setTimeout(()=>{setMsg("")},2000)
        navigate(-1,{replace: true})
      }else{
        throw new Error(resp.data.sapor)
      }
    })
    .catch(err=>{
      setSapor(err.message)
      setTimeout(()=>{setSapor("")},2000)
    })
}
return (
  <>
  {role != "developer" &&<div className="">
    <DropDown
      options={users}
      labelKey="fname"
      onSelect={selectUser}
    />
    <button
      onClick={assignUser}
      className="bg-sky-500 px-2 py-1 text-sm font-medium rounded">Assign</button>
  </div>}
  </>
)}

export default Task
