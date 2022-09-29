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
    <nav className='primary-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink  style={navLinksStyle} to='/about'>About</NavLink>
        <NavLink  style={navLinksStyle} to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar