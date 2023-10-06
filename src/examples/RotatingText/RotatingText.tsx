import React from "react";
import './RotatingText.css'

const RotatingText = () => {

  return (
    <div 
      style={{
        backgroundColor: "black", 
        height: "100vh", 
        width: "100vw", 
        display:"flex", 
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{
        padding: "3rem", 
        border: "2px solid white",
        borderRadius: "50px",
        position: "relative"
      }}>
        <div className="rotating__container">
          {"ROTATING".split("").map((el, i) => {
            return (
              <div 
                className="rotating_letter" 
                style={{transitionDelay: `${i * 75}ms`
              }}
              >{el}</div>
            )
          })}
        </div>

        <div className="rotating__container--grow">
          {"ROTATING".split("").map((el, i) => {
            return (
              <div className="rotating_letter--grow" style={{transitionDelay: `${i * 75}ms`}}>{el}</div>
            )
          })}
        </div>
      </div>
     
    </div>
  )
}

export default RotatingText;