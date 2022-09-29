import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../utils/auth'

const Navbar = () => {
    const navLinksStyle = ({ isActive }) => {
        return {
            color: isActive ? 'red' : '',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    const auth = useAuth();

    return (
        <nav className='primary-nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink style={navLinksStyle} to='/about'>About</NavLink>
            <NavLink style={navLinksStyle} to='/products'>Products</NavLink>
            <NavLink style={navLinksStyle} to='/profile'>Profile</NavLink>
            {!auth.user && <NavLink style={navLinksStyle} to='/login'>Login</NavLink>}
        </nav>
    )
}

export default Navbar