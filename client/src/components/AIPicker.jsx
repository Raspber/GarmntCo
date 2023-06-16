import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea text-white"
      />
      <div className="flex flex-wrap gap-3 w-full flex justify-center">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs bg-custom-black animate-pulse"
          />
        ) : (
          <>
            <CustomButton 
              type="filled"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs text-black transition ease-in-out font-bold delay-50 bg-custom-gray hover:-translate-y-1 hover:scale-105 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs text-black transition ease-in-out font-bold delay-50 bg-custom-gray hover:-translate-y-1 hover:scale-105 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker