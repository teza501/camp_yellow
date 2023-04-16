import React from 'react'
import './progressBar.css'

const MyProgressBar = () => {

    
  return (
    <div className='container'>
        <div className='progress-bar'>
        <div className='progress-bar-fill' style={{width: `${20}%`}} >{" "}</div>
        </div>
        <div className='progress-label'>02:00 minutes</div>
    </div>
  )
}

export default MyProgressBar