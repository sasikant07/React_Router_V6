import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Users = () => {
    return (
        <div>
            <nav>
                <Link to='1'>User 1</Link>
                <Link to='2'>User 2</Link>
                <Link to='3'>User 3</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Users