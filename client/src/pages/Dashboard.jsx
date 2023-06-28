import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
            .post('http://localhost:8000/api/logout')
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error('Logout error:', err);
            });
    };

    return (
        <div>
            <h1 className="head-text">Dashboard</h1>
            <CustomButton
                title="Log Out"
                customStyles="nav-buttons"
                handleClick={handleLogout}
                icon=""
            />
        </div>
    );
};

export default Dashboard;
