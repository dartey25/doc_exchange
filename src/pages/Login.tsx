import React from 'react';
import {useNavigate} from "react-router-dom";

interface LoginProps {
    setUser: (user: any) => void;
}
const Login: React.FC<LoginProps> = ({setUser}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('You clicked me');
        setUser({
            username: 'John Doe',
        })
        navigate('/main');
    }

    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    );
};

export default Login;