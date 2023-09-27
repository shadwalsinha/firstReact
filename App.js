import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "./HeaderComponent"
import { Search } from "./SearchComponents/SearchComponent";
import { Footer } from "./Footer/FooterComponent"


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Search/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
