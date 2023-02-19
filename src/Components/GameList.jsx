import React, { useEffect } from 'react'
import Game from './Game'
import gameImage from '../Static/Game Image small.png'
import { useState } from 'react'

function GameList() {
    const [description,setDescprition] = useState('')
    useEffect (()=>{
        setDescprition('Its your last night shift as a forklift operator at…')
    },[])
    return (
        <div className="game-list">
            <Game setActive = {true}description={description} name={'Nocturnal'} image={gameImage}/>
            <Game setActive = {false}description={description} name={'The Keeper'} image={gameImage}/>
            <Game setActive = {false}description={description} name={'The Keeper'} image={gameImage}/>
            <Game setActive = {false}description={description} name={'Fear Lift'} image={gameImage}/>
            <Game setActive = {false}description={description} name={'Eerness'} image={gameImage}/>
            <Game setActive = {false}description={description} name={'Eerness'} image={gameImage}/>
        </div>
    )
}

export default GameList