import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const onLogin = () => {
        localStorage.setItem('@user_esignature', 'test');
        setTimeout(() => {
            navigate('/portal', { replace: true });
        }, 2000);
    };

    return (
        <>
            <div>Auth Page</div>
            <div onClick={onLogin}>Login</div>
        </>
    );
};

export default Auth;
