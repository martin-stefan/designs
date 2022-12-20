import React, { useRef } from "react";
import {ReactComponent as Scribble} from './scribble.svg';

const ScrollingSVG = () => {

  const scribbleRef:any = useRef(null)

  window.onscroll = e => {
    if (scribbleRef.current) {
      scribbleRef.current.animate({
        strokeDashoffset: 4576 - ((window.scrollY / (window.innerHeight * 2)) * 4576)
      }, {duration: 1200, fill: "forwards"})
    }
  }
  return (
    <div style={{height: "300vh"}}>
      <div style={{position: "fixed"}}>
        <Scribble ref={scribbleRef} style={{strokeDasharray: 4576, strokeDashoffset: 4576}}/>
      </div>
    </div>
  )
}

export default ScrollingSVG;