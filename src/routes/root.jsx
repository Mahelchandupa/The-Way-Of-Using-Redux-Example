import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function root() {
  return (
    <>
     <NavBar />
     <div>
        <Outlet />
     </div>
    </>
  )
}

export default root