import React from 'react'
import CustomButton from './CustomButton'
import { downloadCanvasToImage } from '../config/helpers'

const Download = () => {
    return (
        <div className='aipicker-container'>
            <div className='mt-4 gap-3 w-full h-1/6 flex justify-center'>
            <CustomButton
            type="filled"
            title="Download Image"
            handleClick={downloadCanvasToImage}
            customStyles="text-xs text-black transition ease-in-out font-bold delay-50 bg-custom-gray hover:-translate-y-1 hover:scale-105 hover:bg-custom-gray hover:text-custom-black duration-500 ..."
            />
            </div>
        </div>
    )
}

export default Download

