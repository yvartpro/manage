import { useEffect } from "react"
import { AddTask } from "../components/AddTask"
import Header from "../components/Header"
import api from "../api/axios"
import { useAuth } from "../AuthContext"
import { useParams } from "react-router-dom"
import { TaskList } from "../components/TaskList"

const Project = () =>{
return(
  <>
  <div className="px-4">
    <AddTask/>
  </div>
  </>
)}

export default Project
