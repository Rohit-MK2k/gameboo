import React from 'react'
import download from '../Static/Icon/download icon.png'
import like from '../Static/Icon/like icon.png'
import downloadUnactive from '../Static/Icon/download icon unactive.png'
import likeUnactive from '../Static/Icon/like icon unactive.png'
import windows from '../Static/Icon/Window.png'
import apple from '../Static/Icon/IOS.png'
import android from '../Static/Icon/Google Play.png'


function Game({setActive,description,name,image}) {
    if(setActive){
        return (
          <div className="games-active">
              <img src={image} alt="game-active" className='game-image'/>
              <div className="game-mid">
                  <p className="game-name">{name}</p>
                  <div className="like-downloads">
                      <div className="likes"><img src={like} alt=""/><p>232</p></div>
                      <div className="downloads"><img src={download} alt=""/><p>146k</p></div>
                  </div>
              </div>
              <div className="game-desc">{description}</div>
              <div className="game-end">
                  <div className="platform">
                      <img src= {windows} alt="" />
                      <img src= {apple} alt="" />
                      <img src= {android} alt="" />
                  </div>
                  <button className='download-btn'>
                      Download
                  </button>
              </div>
          </div>
        )
    }
    else{
        return (
            <div className="games-unactive">
                <img src={image} alt="game" className='game-image'/>
                <div className="game-mid">
                    <p className="game-name-unactive">{name}</p>
                    <div className="like-downloads">
                        <div className="likes"><img src={likeUnactive} alt=""/><p>232</p></div>
                        <div className="downloads"><img src={downloadUnactive} alt=""/><p>146k</p></div>
                    </div>
                </div>
                <div className="game-desc">{description}</div>
                <div className="game-end">
                    <div className="platform">
                        <img src= {windows} alt="" />
                        <img src= {apple} alt="" />
                        <img src= {android} alt="" />
                    </div>
                    <button className='download-btn'>
                        Download
                    </button>
                </div>
            </div>
          )
    }
}

export default Game