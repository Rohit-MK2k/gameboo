import React, { useState, useEffect } from 'react'
import search from '../Static/Icon/search icon.png'
import trends from '../Static/Icon/Trending Game.png'
import notification from '../Static/Icon/Notification Icon.png'
import award from '../Static/Icon/Award.png'
import profile from '../Static/Profile.png'
import NavIcon from './NavIcon'


function NavBar() {
  const [trendAlert, setTrendAlert] = useState(false)
  const [notificationAlert, setnotificationAlert] = useState(false)
  const [awardAlert, setAwardAlert] = useState(false)
  const [text, setText] = useState()
  useEffect(()=>{
    setnotificationAlert(true)
    setAwardAlert(false)
    setTrendAlert(false)

  },[])
  const handleText = (e) =>{
    setText(e.target.value)
  }
  return (
    <div className='navbar'>
      <div className="navbar-half-1">
        <div className="search-bar">
          <input type="text" onChange = {handleText} className='search-bar-input' name="Search bar" placeholder='Search game... ' value = {text}/>
          <div className="search-icon">
            <img src={search} alt="" />
          </div>
        </div>
      </div>

      <div className="navbar-half-2">
        <NavIcon icon = {trends} alert = {trendAlert}/>
        <NavIcon icon = {notification} alert = {notificationAlert}/>
        <NavIcon icon = {award} alert = {awardAlert}/>
        <button className="users"><img src={profile} alt="" /></button>
      </div>
    </div>
  )
}

export default NavBar