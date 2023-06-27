import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import CustomButton from './CustomButton';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        axios
            .post("http://localhost:8000/api/register", newUser)
            .then((res) => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/dashboard')
            })
            .catch((err) => {
                // If the server returned a message, display it
                if (err.response.data.message) {
                    setErrors({ message: err.response.data.message });
                } else {
                    // Otherwise, display the validation errors
                    setErrors(err.response.data.errors);
                }
            });
    }
    return (
        <form onSubmit={handleRegister}>

            <label htmlFor="firstName" className="block text-900 font-medium mb-2">First Name</label>
            <InputText
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />

            {errors?.firstName && (
                <span className='text-red-600'>
                    {errors.firstName?.properties?.message}
                </span>
            )}

            <label htmlFor="lastName" className="block text-900 font-medium mb-2">Last Name</label>
            <InputText
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />

            {errors?.lastName && (
                <span className='text-red-600'>
                    {errors.lastName?.properties?.message}
                </span>
            )}

            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText
                name="email"
                type="text"
                placeholder="Email address"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            {errors?.message && (
                <span className='text-red-600'>
                    {errors.message}
                </span>
            )}
            {errors?.email && (
                <span className='text-red-600'>
                    {errors.email?.properties?.message}
                </span>
            )}

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText
                name="password"
                type="password"
                placeholder="Password"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            {errors?.password && (
                <span className='text-red-600'>
                    {errors.password?.properties?.message}
                </span>
            )}

            <label htmlFor="confirmPassword" className="block text-900 font-medium mb-2">Confirm Password</label>
            <InputText
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            {errors?.confirmPassword && (
                <span className='text-red-600'>
                    {errors.confirmPassword?.properties?.message}
                </span>
            )}
            <br />
            <CustomButton
                title="Register"
                customStyles="nav-buttons mt-3"
                handleClick={handleRegister}
            />
        </form>
    )
}

export default RegisterForm