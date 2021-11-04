import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const Routing = () => {
    const lclStorage = localStorage.getItem('@user_esignature');

    const routing = useRoutes(routes(lclStorage));

    return <>{routing}</>;
};

export default Routing;
