import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return(
    <div className="csgo__navbar">
      <div className="csgo__navbar-links">
        <div className="csgo__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="csgo__navbar-links_container">
          <p><a href="/home">Home</a></p>
          <p><a href="/matches">Matches</a></p>
          <p><a href="/aboutus">About Us</a></p>
        </div>
      </div>
    </div>
  )
}
export default Navbar