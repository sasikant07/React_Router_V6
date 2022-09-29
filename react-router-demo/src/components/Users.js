import React from 'react'
import { Outlet } from 'react-router'
import { Link, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
        <div>
            <nav>
                <Link to='1'>User 1</Link>
                <Link to='2'>User 2</Link>
                <Link to='3'>User 3</Link>
            </nav>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? (
                    <h2>Showing active users</h2>
                ) : (
                    <h2>Showing all users</h2>
                )
            }
        </div>
    )
}

export default Users