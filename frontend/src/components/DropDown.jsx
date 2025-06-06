import { useState } from "react";

export const DropDown = ({ options, labelKey, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 text-left px-4 py-2 rounded-lg shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {selected ? selected[labelKey] : "Select an option"}
        <span className="float-right text-gray-400">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {option[labelKey]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
