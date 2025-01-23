import React from "react";
import quotes from "./quotes";

let randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex])

const JSX1 = (
  <div>
    <h1>RED STAR IN THE SKY</h1>
    <p>{quotes[randomIndex]}</p>
  </div>
);

const container = document.getElementById("container")
ReactDOM.render()