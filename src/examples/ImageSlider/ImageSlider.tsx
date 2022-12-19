import React, { useRef } from "react";
import './ImageSlider.css'

const ImageSlider = () => {

  const imageRef= useRef<HTMLDivElement>(null);

  const handleDown = (e:MouseEvent | Touch) => {
    if (imageRef.current) {
      imageRef.current.dataset.mousedownat = e.clientX.toString();
    }
  }

  const handleMove = (e:MouseEvent | Touch) => {
    if (imageRef.current && imageRef.current.dataset.mousedownat !== "0") {

      const mouseDelta = parseFloat(imageRef.current.dataset.mousedownat!) - e.clientX, 
            maxDelta = window.innerWidth / 2;
            
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnlimited = percentage + parseFloat(imageRef.current.dataset.currentpercent!),
            nextPercentage = Math.max(Math.min(nextPercentageUnlimited, 0), -100);

      imageRef.current.dataset.percent = nextPercentage.toString();

      for (let i = 0; i < imageRef.current.children.length; i++) {
        imageRef.current.children[i].animate({
          objectPosition:`${100 + nextPercentage}% 50%`
        }, {duration: 1200, fill: "forwards"})
      }
      
      imageRef.current.animate({
        transform: `translate(${nextPercentage}%, -50%`
      }, {duration: 1200, fill: "forwards"})
      
    }
  }

  const handleUp = () => {
    if (imageRef.current) {
      imageRef.current.dataset.mousedownat = "0";
      imageRef.current.dataset.currentpercent = imageRef.current.dataset.percent;
    }
  }

  window.onmousedown = e => handleDown(e)
  window.onmousemove = e => handleMove(e)
  window.onmouseup = e => handleUp()
  window.ontouchstart = e => handleDown(e.touches[0])
  window.ontouchmove = e => handleMove(e.touches[0])
  window.ontouchend = e => handleUp()
  
  return (
    <div className="content">
      <div className="imageContainer" ref={imageRef} data-mousedownat="0" data-currentpercent="0">
        <img src="https://images.pexels.com/photos/5374862/pexels-photo-5374862.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/5326909/pexels-photo-5326909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
        <img src="https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" draggable="false"/>
      </div>
    </div>
  )
}

export default ImageSlider;