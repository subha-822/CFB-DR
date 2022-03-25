import React from "react";
import ReactDOM from "react-dom";

/* 1st Part */
// ReactDOM.render(
//   <div>
//     <h1>Happy Journey</h1>
//     <p>Happy Life</p>
//   </div>,
//   document.getElementById("root")
// );

/* 2nd Part */
// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

/* 3rd Part */
const name = "Angela";
const number = 2;
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {number}.</p>
    <p>Your lucky number is {Math.random()}.</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
