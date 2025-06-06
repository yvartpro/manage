import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {
  LightBulbIcon as SkillsIcon
} from "@heroicons/react/24/outline"
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"

//ADD COLOR PALETTE AND ALLOW USER TO  CUSTOMIZE UI. ALSO ADD ICONS

const Carousel = () => {
const { activities } = useAuth()
const navigate = useNavigate()
const slides = [
  {
    bg: "bg-blue-100",
    icon: <SkillsIcon className="w-6 text-orange-500"/>,
  },
  {
    bg: "bg-green-100",
    icon: <SkillsIcon className="w-6 text-pink-500"/>,
  },
  {
    bg: "bg-yellow-100",
    icon: <SkillsIcon className="w-6 text-gray-500"/>,
  },
  {
    bg: "bg-cyan-200",
    icon: <SkillsIcon className="w-6 text-green-500"/>,
  }

]
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        autoplay: true,
        gap: '1rem',
        pagination: 0,
        arrows: 0,
      }}
      className="max-w-xl mx-auto"
     >
      {activities.map((act,i)=>{
        const style = slides[Math.floor(Math.random() * slides.length)]
        const new_act = {...act, bg: style.bg, icon:style.icon }
        const {id, created_by, title, bg, icon } = new_act
        return(
          <SplideSlide
            key={i}
          >
            <div
              className={`${bg} px-5 py-6 rounded-lg shadow-md`}
              onClick={()=>navigate(`/project/${id}`, {state: {from: title}})}
            >
              <div className="flex justify-between  items-center pb-2">
                <h2 className="text-sm text-slate-600 font-medium mb-2">{title}</h2>
                {icon}
              </div>
              <p className="text-xs">{id}</p>
            </div>
          </SplideSlide>
        )})}
    </Splide>
  )
}

export default Carousel
