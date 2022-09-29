import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../utils/auth';

const Login = () => {
    const [user, setUser] = useState('');
    const location = useLocation();
    const auth = useAuth()
    const navigate = useNavigate();

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: true});
    }
    return (
        <div>
            <label>
                Username: <input type="text" onChange={e => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login