import React from 'react'

const CustomButton = ({ title, customStyles, handleClick, icon }) => {


  return (
    <button
      className={` object-contain px-2 py-1.5 rounded-md text-xs ${customStyles}`}
      onClick={handleClick}
    >
      {title} {icon && <img src={icon} alt="Button Icon"/>}
    </button>
  )
}

export default CustomButton