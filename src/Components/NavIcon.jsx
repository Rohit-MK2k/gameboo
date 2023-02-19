import React from 'react'

function NavIcon({icon, alert}) {
    if(alert){
        return (
            <>
                <div className="navicon-container">
                    <div className="red-dot"></div>
                    <button className="nav-icon"><img src={icon} alt="" /></button>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className="navicon-container">
                    {/* <div className="red-dot"></div> */}
                    <button className="nav-icon"><img src={icon} alt="" /></button>
                </div>
            </>
        )
    }
 
}

export default NavIcon