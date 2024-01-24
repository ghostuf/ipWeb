import React from "react";
import geometry from "./assets/geometry.svg"
import vector1 from "./assets/vector1.svg"
import vector2 from "./assets/vector2.svg"
import vector3 from "./assets/vector3.svg"
import vector4 from "./assets/vector4.svg"
import vector5 from "./assets/vector5.svg"
import vector6 from "./assets/vector6.svg"
import vector7 from "./assets/vector7.svg"

export default function(){
  return(
    <div className="Main-container">
        <img src = {geometry} className = "geometry-img"/>
        <img src = {vector1} className = "vector1"/>
        <img src = {vector2} className = "vector2"/>
        <img src = {vector3} className = "vector3"/>
        <img src = {vector4} className = "vector4"/>
        <img src = {vector5} className = "vector5"/>
        <img src = {vector6} className = "vector6"/>
        <img src = {vector7} className = "vector7"/>

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