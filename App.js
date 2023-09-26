import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./HeaderComponent"


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
