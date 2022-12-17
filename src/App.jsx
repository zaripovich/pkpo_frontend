import React from "react";
import {Route,Routes} from "react-router-dom";
import { Matches,Aboutus } from "./containers";
import { Navbar,Match_info } from "./components";

import './App.css';

const App = () => {
  return(
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
        </div>
      </div>
      <Routes>
        <Route path="/">
          <Route path="" element={<Matches/>} />
          <Route path="match/:id" element={<Match_info/>}/>
          <Route path="aboutus" element={<Aboutus/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}
export default App