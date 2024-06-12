import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {

  const cart = useSelector(state => state.cart)

  return (
    <div className=' fixed top-0 w-full h-16 flex justify-between items-center lg:px-16 px-3 bg-slate-300 shadow-md'>
       <div className=' flex gap-8'>
         <h1 className=' text-lg text-orange-500'>Learn Redux</h1>
         <Link to='/'>Products</Link>
       </div>
       <Link to="/cart">
         My Cart ({cart.length})
       </Link>
    </div>
  )
}

export default NavBar