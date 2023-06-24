import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import CustomButton from './CustomButton';

const LoginForm = () => {
    return (
        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3 rounded-md" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3 rounded-md" />

            <div className="flex align-items-center justify-content-between mb-6 justify-between">
                <div className="flex align-items-center text-xs">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-custom-black text-right cursor-pointer text-xs">Forgot your password?</a>
            </div>
            <CustomButton
                title="Sign In"
                customStyles="nav-buttons"
            />
        </div>
    )
}

export default LoginForm