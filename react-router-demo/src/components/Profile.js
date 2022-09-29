import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../utils/auth'

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

  return (
    <div>
        Welcome {auth.user}
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile