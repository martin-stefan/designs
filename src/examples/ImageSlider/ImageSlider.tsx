import React, { useRef } from "react";
import './ImageSlider.css'

const ImageSlider = () => {

  const imageRef= useRef<HTMLDivElement>(null );

  window.onmousedown = e => {
    e.clientX;
  }
  
  return (
    <div className="content">
      <div className="imageContainer" ref={imageRef}>
        <img src="https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/3705368/pexels-photo-3705368.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/4492736/pexels-photo-4492736.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/5326909/pexels-photo-5326909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/2563854/pexels-photo-2563854.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/5846907/pexels-photo-5846907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default ImageSlider;