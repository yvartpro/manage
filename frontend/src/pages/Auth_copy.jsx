import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"
import { useAuth, login } from "../AuthContext"

const Auth = () =>{
const navigate = useNavigate()
const { checkAuth } = useAuth()
const [isLogin, setIsLogin] = useState(true)
const [user, setUser] = useState({
  fname: "",
  lname: "",
  nickname: "",
  domain: "",
})
const [sapor, setSapor] = useState("")
//get formdata
const getData = (e) =>{
  const {name, value } = e.target
  setUser(p=>({...p,[name]: value}))
}

//login user
const loginUser = async () =>{
  api.post('/login',user)
//  api.post('/login.php',user)
/*  api.post('/login',user)
    .then(resp=> {
      if(resp.data.success){
        console.log(resp.data)
        login(resp.data.token)
        //navigate("/", {replace: true})
      }else{
        setSapor(resp.data.sapor)
        setTimeout(()=>{
          setSapor("")
        },2000)
      }
    })
    .catch(err=>{
      setSapor(err.message)
      setTimeout(()=>{
        setSapor("")
      },2000)
    })*/
}

//register user
const signupUser = () => {
  api.post("/register",user)
    .then(resp => {
      if(resp.data.success){
        setIsLogin(true)
        localStorage.setItem('token',resp.data.token)
      }else{
        setSapor(resp.data.sapor)
        setTimeout(()=>{
          setSapor("")
        },2000)
      }
    })
    .catch(err=> {
      setSapor(err.message)
      setTimeout(()=>{
        setSapor("")
      },2000)
    })
}

return(
<div
  className="px-10 py-5"
>
  <div className="flex items-center justify-center mb-5">
  <img
    src="/150x150.png"
    alt="Vovota"
    className="w-16"/></div>
  <p
    className="text-center text-gray-700 mb-4 font-bold">
    {isLogin ? "Login form" : "Registration form" }
  </p>
  {sapor&&<p className="text-sm text-center text-red-500">{sapor}</p>}
 {!isLogin &&
 <div className="flex items-center justify-center gap-3 my-3">
  <label for="f" className="text-sm">Frontend</label>
  <input id="f" type="radio"
    name="domain" value="F"
    onChange={getData}/>

  <label for="b" className="text-sm">Backend</label>
  <input id="b" type="radio"
    name="domain" value="B"
    onChange={getData}/>
 </div>}
 {!isLogin &&
  <input
    type="text"
    onChange={getData}
    name="fname"
    className="w-full mb-3 border border-sky-500 rounded focus:border-slate-400 p-3 text-sm outline-none"
    placeholder="First name"
  />}

 {!isLogin &&
  <input
    type="text"
    onChange={getData}
    name="lname"
    className="w-full mb-3 border border-sky-500 rounded focus:border-slate-400 p-3 text-sm outline-none"
    placeholder="Last name"
  />}

  <input
    type="text"
    onChange={getData}
    name="nickname"
    className="w-full mb-3 border border-sky-500 rounded focus:border-slate-400 p-3 text-sm outline-none"
    placeholder="Nickname"
  />

  <input
    type="password"
    onChange={getData}
    name="password"
    className="w-full mb-3 border border-sky-500 rounded focus:border-slate-400 p-3 text-sm outline-none"
    placeholder="Password"
  />
  <button
    onClick={isLogin ? loginUser : signupUser }
    className="bg-sky-500 w-full py-2 shadow-md my-2 border rounded hover:bg-sky-700 text-md font-medium text-white"
  >{isLogin ? "Login" : "Register" }
  </button>
  <p className="text-right text-xs my-3 text-sky-700 cursor-pointer">Password forgotten  ?</p>
  <span className="text-sm">{isLogin ? "Not yet registered ?" : "Already have an account ?" }
  <span
    className="text-sky-700 text-sm cursor-pointer hover:text-sky-500"
    onClick={()=>setIsLogin(!isLogin)}>{isLogin ? " Register now." : " Login instead" } </span>
  </span>
</div>
)}

export default Auth
