import React from 'react'
import logo from '../Static/Logo.png'
import PagesList from './PagesList'
import logout from '../Static/Icon/logout.png'


function MenuBar() {
  return (
    <div className='menu-bar'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <PagesList/>
        <button className="log-out">
            <i className="logout-icon"><img src={logout} alt=""/></i><p className='logout-text'>Log Out</p>
        </button>
    </div>
  )
}

export default MenuBar