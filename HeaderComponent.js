import logo from "./assets/Logo.png";
import React from "react";
import ReactDOM from "react-dom/client";

export const HeaderComponent = () => {
  return (
    <div className="Header">
      <div>
        <img src={logo} className="logoImage"></img>
      </div>
      <div>
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
