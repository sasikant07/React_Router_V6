import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinksStyle = ({ isActive }) => {
        return {
            color: isActive ? 'red' : '',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav>
        <NavLink style={navLinksStyle} to='/'>Home</NavLink>
        <NavLink  style={navLinksStyle} to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar