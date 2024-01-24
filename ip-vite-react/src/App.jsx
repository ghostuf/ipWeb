import React from "react";
import geometry from "./assets/geometry.svg"
import vectors from "./assets/vector1.svg"

export default function(){
  return(
    <div className="Main-container">
        <img src = {vectors} className = "vector-img"/>
        <img src = {geometry} className = "geometry-img"/>
        <div className = "header">
          Track IPs
        </div>

        <div className="main-container">
          <div className = "input-container">
            <input type = "text" className = "input-field"></input>
          </div>
          <div className = "output-terminal">
            
          </div>
        </div>
    </div>
  )
}