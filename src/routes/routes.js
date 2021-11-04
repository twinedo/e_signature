import { Navigate } from 'react-router-dom';
import Auth from '../pages/auth/Auth';
import Portal from '../pages/portal/Portal';

const routes = (isLoggedIn) => [
    {
        path: '/portal',
        element: isLoggedIn !== null ? <Portal /> : <Navigate to='/' replace />,
    },
    {
        path: '/',
        element: isLoggedIn === null ? <Auth /> : <Navigate to='/portal' />,
    },
];

export default routes;
