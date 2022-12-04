import React from "react";

import { Matches,Aboutus } from "./containers";
import { Navbar } from "./components";

import './App.css';

const App = () => {
  return(
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Aboutus/>
      </div>
      <Matches/>
    </div>
  )
}
export default App