import React from 'react'
import path from '../Static/Icon/path.png'
import diamond from '../Static/Icon/diamond icon.png'
import rocket from '../Static/rocket 3D.png'
import thumbnail from '../Static/SideBar Thumbnail.png'
import GameList from './GameList'
import download from '../Static/Icon/download icon.png'
import like from '../Static/Icon/like icon.png'
import award from '../Static/Icon/Award game icon.png'
import star from '../Static/Icon/Star game icon.png'


function DashBoard() {
  return (
    <div className='dash-board'>
        <div className="dashboard-half-1">
          <div className="promotion">
            <div className="promotion-half-1">
              <div className="promotion-desc">
                <p>3D Game Assets Store &<br/>Free</p>
                <h1>High-quality premium<br/>& free 3D-game assets.</h1>
              </div>
              <button className="download-asset"><img src={diamond} alt=""/><p>Download Assets</p></button>
            </div>
            <div className="promotion-half-2">
              <img src={rocket} alt=""/>
            </div>
          </div>
            
          <div className="popular-games">
            <h3 className="popular-game-header">Popular Games <img src={path} alt="" /></h3>
            <GameList/>
          </div>
        </div>

        <div className="dashboard-half-2">
          <img src= {thumbnail} className= "game-image" alt="" />
          <div className="dashboard-half-2-mid">
            <p className="game-name-2">Nocturnal</p>
              <div className="like-downloads-2">
                <div className="likes"><img src={like} alt=""/><p>232</p></div>
                <div className="downloads"><img src={download} alt=""/><p>146k</p></div>
              </div>
          </div>
          <div className="game-desc-2">
            <p>KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
            <p>KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
            <p>KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
            <p>KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
            <p>KeyCars is a free (multiplayer only) game where each player can play using a single key on a keyboard. Press a key to join, then hold that key to turn the vehicle. Clash into players, shoot projectiles or trick them into driving off the ledge…</p>
          </div>
          <div className="achievment">
            <div className="star-game">
              <div className="achievment-icon"><img src={star} alt="" /></div>
              <div className="achievment-text">
                <div className="rating">8.2</div>
                <p>Start Game</p>
              </div>
            </div>
            <div className="award-game">
              <div className="achievment-icon"><img src={award} alt="" /></div>
              <div className="achievment-text">
                <div className="rating">12</div>
                <p>Awards Game</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashBoard