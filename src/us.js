import React from 'react'
import './App.css';
import us from './images/us.png'
const Us = () => {
  return (
    <div className='us-container'>
    <h2 className='we'>Who Are We</h2>
    <p>Network Engineers Showcasing the Utility of Bitcoin</p>
        <iframe
        src="https://www.youtube.com/embed/ZGbdyBU5mQI"
        width="600px"
        display="block"
        height="400px"
        frameBorder="1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title='video'
            ></iframe>
      <img src={us} className="benefits-img" alt="pic" />

    </div>
  )
}

export default Us;