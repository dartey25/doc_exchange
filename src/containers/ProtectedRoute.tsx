import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

interface ProtectedRouteProps {
    user: any;
    children?: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({user, children}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;