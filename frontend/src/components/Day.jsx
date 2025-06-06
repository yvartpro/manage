import { CalendarIcon as Calendar } from '@heroicons/react/24/outline';

export const DatePicker = ({ props }) => {
  const { day, setDay, label, id } = props;

return (
<div>
  <div className="flex items-center gap-2 my-2 cursor-pointer text-sm text-gray-700 hover:text-sky-400">
    <label
      htmlFor={id}>
      <Calendar className="w-6 h-6 text-gray-400" />
    </label>
    <span>{day ? `${label} ${day}` : `${label} jj/mm/aaa`}</span>
  </div>
  <input
    id={id}
    type="date"
    className="absolute w-0 h-0 opacity-0"
    value={day}
    onChange={(e) => setDay(e.target.value)}
  />
</div>
)}
