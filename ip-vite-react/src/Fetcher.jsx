import React from "react";
import { useState } from "react";
import search from "./assets/search.png"

export default function Fetcher(){
    const [input, inputchnager] = useState("");

    const buttonhandler = () => {
        console.log("Activated");
        const url = `http://ip-api.com/json/${input}`;
        console.log(url);

        fetch(url).then(
            response => response.json()
        ).then(
            data => {
                const divElem  = document.querySelector(".output-terminal");
                divElem.innerHTML = JSON.stringify(`Country => ${data.country}<br>Region => ${data.regionName}<br> City => ${data.city}<br> isp => ${data.isp}`);
            }
        ).catch((e) => {console.log(`not able to fetch data! error: ${e}`)})
    }


    return(
        <div className="input-terminal-container">
            <div className = "input-container">
              <input type = "text" value = {input} onChange = {(e) => {inputchnager(e.target.value)}}className = "input-field" placeholder="Enter your ip address here..."></input>
              <button className="input-button" onClick={buttonhandler}>
                <img src = {search} className="search-img"/>
              </button>
            </div>
            <div className = "output-terminal">
            </div>
          </div>
    )
}