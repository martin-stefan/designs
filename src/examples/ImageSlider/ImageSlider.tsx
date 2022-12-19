import React, { useRef, useState } from "react";
import './ImageSlider.css'

const ImageSlider = () => {

  const [percent, setPercent] = useState(100)

  const imageRef= useRef<HTMLDivElement>(null);

  window.onmousedown = e => {
    if (imageRef.current) {
      imageRef.current.dataset.mousedownat = e.clientX.toString();
    }
  }

  window.onmousemove = e => {
    if (imageRef.current && imageRef.current.dataset.mousedownat !== "0") {

      const mouseDelta = parseFloat(imageRef.current.dataset.mousedownat!) - e.clientX, 
            maxDelta = window.innerWidth / 2;
            
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnlimited = percentage + parseFloat(imageRef.current.dataset.currentpercent!),
            nextPercentage = Math.max(Math.min(nextPercentageUnlimited, 0), -100);

      setPercent(100 + nextPercentage)
      imageRef.current.dataset.percent = nextPercentage.toString();
      imageRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
      
    }
  }

  window.onmouseup = e => {
    if (imageRef.current) {
      imageRef.current.dataset.mousedownat = "0";
      imageRef.current.dataset.currentpercent = imageRef.current.dataset.percent;
    }
  }
  
  return (
    <div className="content">
      <div className="imageContainer" ref={imageRef} data-mousedownat="0" data-currentpercent="0">
        <img src="https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/3705368/pexels-photo-3705368.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/4492736/pexels-photo-4492736.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/5326909/pexels-photo-5326909.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/2563854/pexels-photo-2563854.jpeg?auto=compress&cs=tinysrgb&w=400" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/5846907/pexels-photo-5846907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{objectPosition:`${percent}% 50%`}}alt="" draggable="false"/>
      </div>
    </div>
  )
}

export default ImageSlider;