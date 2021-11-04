import React from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('@user_esignature');
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 1000);
    };

    return (
        <>
            <div>Portal Page</div>
            <div onClick={onLogout}>Logout</div>
        </>
    );
};

export default Portal;
