import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const Videoplayer = ({playState , setPlayState}) => {

    const player = useRef(null);

    const closePlayer = ()=> {
        if(else.target)
    }



  return (
    <div className={`Video-player ${playState? '':'hide'}`} ref={ player }>
      <video src={video}  autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
