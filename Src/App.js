import React from "react";
import ReactDOM from "react-dom/client";
import {HeaderComponent} from "../HeaderComponent"
import { Search } from "./SearchComponents/SearchComponent
import { Footer } from "./Footer/FooterComponent
import { BubbleChat } from 'flowise-embed-react'


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Search/>
      <BubbleChat className="chatbot" chatflowid="4e9fae87-fe83-41fe-9571-0883e155d998" apiHost="http://localhost:3000" />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
