export const Card = ({props}) =>{

const {title, start, end, user_count, status } = props.task
const bg = props.bg
return(
  <div className={`${bg} p-3 rounded-lg shadow-sm`}>
    <div className="flex justify-between  items-center pb-2">
      <h2 className="text-13 text-slate-600 font-medium mb-2">{title}</h2>
      <span className="text-white px-2 py-1 text-xs bg-cyan-500 rounded-full">{user_count}</span>
    </div>
    <p className="flex justify-between gap-2">
      <span className="text-10 text-slate-400">{start}</span>
      <span className="text-10 text-slate-400">{status}</span>
    </p>
  </div>
)}
