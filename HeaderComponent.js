import logo from "./assets/Logo.png";
import React from "react";
import ReactDOM from "react-dom/client";

export const HeaderComponent = () => {
  return (
    <div className="Header">
      <div className="logoAndName">
        <img src={logo} className="logoImage"></img>
        <h1 className="comapanyName">Food<span className="blackM">Mate</span></h1>
      </div>
      <div className="Nav">
        <ul className="Menu">
          <li>
            <span className="content"> Home </span>
          </li>
          <li>
            <span className="content">Contact Us</span>
          </li>
          <li>
            <span className="content">About Us</span>
          </li>
          <li>
            <span className="content">Cart </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
