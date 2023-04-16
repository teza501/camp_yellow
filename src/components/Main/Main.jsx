import React from 'react'
import './main.css'
import MyProgressBar from './MyProgressBar'

export const Main = () => {
  return (
    <div className='main-section'>
       <div className='main-left-side'>
        <input className='app-name' type='text' placeholder='Enter Your App Name' />
        <p>Upload Game Files:</p>
        <div className='btn-div'>
        <button>CSV for Story</button>
        <button>Game Assets</button>
        <button>App Icon</button>
        </div>
        <a href='#'>Click here to dwonload sample Files</a>
        <button className='add-game-btn'>Click to build the game</button>
        <MyProgressBar />
       </div>

       <div className='main-right-side'>
       <iframe width="560" height="315"
        src="https://www.youtube.com/embed/Dps7jjlJwEg" 
        title="YouTube video player"
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen></iframe>
        <p>Check out he demo to get started</p>
       </div>
       <hr />
    </div>
  )
}
