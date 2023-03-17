import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import './layout.css';
const Layout = () => {

  return (
    <>
      <Menu 
      link='back to home'/>
      <div className='container'>
        <div className="contenedor-pets mt-5">
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default Layout