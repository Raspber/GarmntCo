import React from 'react'

const CustomButton = ({ title, customStyles, handleClick }) => {


  return (
    <button
      className={` object-contain px-2 py-1.5 rounded-md shadow-md text-xs ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton