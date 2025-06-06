import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../AuthContext"
import api from "../api/axios"
import axios from "axios"
import {
  ArrowRightOnRectangleIcon as ExitIcon,
  BellIcon, HomeIcon
} from '@heroicons/react/24/outline';
const Header = () => {

//states
const navigate = useNavigate()
const {pathname} = useLocation()

const {
  user, setUser,
  setConnected,
  openNotif, setIsHome,
} = useAuth()
const { fname, lname, nickname, domain, role } = user
const iconStyle = "w-6 text-sky-500"

//logout user
const logoutUser= async ()=> {
  api.post('/logout')
    .then(resp =>{
      navigate('/auth', {replace: true})
    })
}

const getVideos = () =>{
  axios.get('https://vovota.bi/index/',{
    headers: {
      "Authorization": "Bearer "
    }
  })
}
return (
  <header className="fixed w-full z-10 bg-white shadow-sm px-4 py-3 flex items-center justify-between">
     { pathname === "/" ? <div>
      <div className="flex justify-start gap-1">
        <img src="/150x150.png" onClick={getVideos} alt="Vovota" className="w-8 h-8"/>
        <div className="">
          <p className="text-sm text-gray-700">{fname}</p>
          <p className="text-xs text-gray-400">{nickname}</p>
        </div>
      </div>
    </div> :
    <HomeIcon
      onClick={()=>navigate("/")}
      className={iconStyle}
    />}
    <div className="flex justify-end items-center gap-2">
      <BellIcon
        onClick={()=>navigate("/notifications")}
        className={iconStyle}
      />
      <ExitIcon
        onClick={logoutUser}
        className={iconStyle}
      />
    </div>
  </header>
)}

export default Header;
