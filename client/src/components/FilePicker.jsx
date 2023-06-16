import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container flex justify-center">
      <div className="flex-col w-full text-center">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-4 text-gray-500 text-xs truncate text-white">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 w-full h-1/2 flex justify-center">
        <CustomButton 
          type="filled"
          title="Place Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs text-black transition ease-in-out font-bold delay-50 bg-custom-gray hover:-translate-y-1 hover:scale-105 hover:bg-custom-gray hover:text-custom-black h-2/6 duration-500 ..."
        />
      </div>
    </div>
  )
}

export default FilePicker