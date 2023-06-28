import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import axios from 'axios'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = { email, password };
        axios
            .post("http://localhost:8000/api/login", loggedUser)
            .then((res) => {
                setEmail('');
                setPassword('');
                navigate("/dashboard");
            })
            .catch((err) => {
                //If the server returned a message, display it
                if(err.response.data.message){
                    setErrors({message: err.response.data.message });
                } else{
                //otherwise, display the validation errors.
                    setErrorMessage(err.response.data.errors);
                }
            });
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText
                name="email"
                type="text"
                placeholder="Email address"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText
                name="password"
                type="password"
                placeholder="Password"
                className="w-full mb-3 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors && <p className='text-red-600'>{errors.message}</p>}
            <CustomButton
                title="Sign In"
                customStyles="nav-buttons  mt-3"
            />
        </form>
    )
}

export default LoginForm