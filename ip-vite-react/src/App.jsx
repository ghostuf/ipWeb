import React from "react";
import geometry from "./assets/geometry.svg"
import vectors from "./assets/vector1.svg"

export default function(){
  return(
    <div className="Main-container">
        <img src = {vectors} className = "vector-img"/>
        <img src = {geometry} className = "geometry-img"/>
    </div>
  )
}