import React from 'react'
import { InputText } from 'primereact/inputtext';
import CustomButton from './CustomButton';

const RegisterForm = () => {
    return (
        <div>
            <label htmlFor="firstName" className="block text-900 font-medium mb-2">First Name</label>
            <InputText id="firstName" type="text" placeholder="First Name" className="w-full mb-3 rounded-md" />
            <label htmlFor="lastName" className="block text-900 font-medium mb-2">Last Name</label>
            <InputText id="lastName" type="text" placeholder="Last Name" className="w-full mb-3 rounded-md" />
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3 rounded-md" />
            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3 rounded-md" />
            <label htmlFor="confirmPassword" className="block text-900 font-medium mb-2">Confirm Password</label>
            <InputText id="confirmPassword" type="password" placeholder="Confirm Password" className="w-full mb-3 rounded-md" />
            <CustomButton
                title="Register"
                customStyles="nav-buttons"
            />
        </div>
    )
}

export default RegisterForm