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
            <li> Home</li>
            <li> Contact Us</li>
            <li> About Us</li>
            <li> Cart</li>
          </ul>
        </div>
      </div>
    );
};

  