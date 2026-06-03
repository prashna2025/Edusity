import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const Videoplayer = () => {
  return (
    <div className='Videoplayer'>
      <video src={video} controls></video>
    </div>
  )
}

export default Videoplayer
