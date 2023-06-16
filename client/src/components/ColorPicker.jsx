import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const CustomColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="colorpicker-container absolute left-full ml-3 glassmorphism rounded-lg text-center p-2 flex flex-col items-center bg-gradient-to-r from-blue-500">
      {snap.pc54ShirtColors.map((color, index) => (
        <div
          key={index}
          className='rounded-full justify-center flex justify-items-center border-2 border-custom-gray'
          style={{
            backgroundColor: color.color,
            cursor: 'pointer',
            margin: '5px',
            height: '25px',
            width: '25px',
          }}
          onClick={() => {
            state.color = color.color; 
            state.shirtColorTitle = color.title;
          }}
        />
      ))}
      <p className='text-white text-xs'>Color: {snap.shirtColorTitle}</p>
    </div>
  );
};

export default CustomColorPicker;