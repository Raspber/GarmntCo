import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../components'
import Cookies from 'js-cookie'
import axios from 'axios'
const Dashboard = ({ setLogoutMessage }) => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        axios
            .post("http://localhost:8000/api/logout", { withCredentials: true })
            .then((res) => {
                Cookies.remove('token');
                setLogoutMessage(response.data.message);
                navigate('/')
            })
            .catch((err) => {
                //If the server returned a message, display it
                if(err.response.data.message){
                    setLogoutMessage({message: err.response.data.message });
                } else{
                //otherwise, display the validation errors.
                    setLogoutMessage(err.response.data.errors);
                }
            });
    }
    return (
        <div>
            <h1 className='head-text'>dashboard</h1>
            <CustomButton
                title="Log Out"
                customStyles="nav-buttons"
                handleClick={handleLogout}
                icon=""
            />
        </div>
    )
}

export default Dashboard