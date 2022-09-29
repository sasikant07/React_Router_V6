import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div>Products</div>
        <input type="text" placeholder='search products here...' />
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>
  )
}

export default Products