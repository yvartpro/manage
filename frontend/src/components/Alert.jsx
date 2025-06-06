import { useAuth } from "../AuthContext"

export const Alert = ()=>{
  const { sapor, msg } = useAuth()
return(
<>
{/*alert message*/}
{msg && <div className="absolute z-20 top-4 w-full flex justify-center">
          <span className="bg-sky-50 rounded-sm shadow-md px-3 py-1 text-green-800 text-xs">{msg}</span>
        </div>
}
{/*sapor*/}
{sapor && <div className="absolute z-20 top-4 w-full flex justify-center">
            <span className="bg-sky-50 rounded-sm shadow-md px-3 py-1 text-red-400 text-xs">{sapor}</span>
          </div>
}

</>
)}

