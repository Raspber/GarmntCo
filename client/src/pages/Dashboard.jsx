import React from 'react'
import { CustomButton } from '../components'

const Dashboard = () => {
    return (
        <div>
            <h1 className='head-text'>dashboard</h1>
            <CustomButton
            title="Log Out"
            customStyles="nav-buttons"
            handleClick=""
            icon=""
            />
        </div>
    )
}

export default Dashboard