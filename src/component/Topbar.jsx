import React from "react";
import harmburger from "../assets/images/Vector.svg";
import logo from "../assets/images/HERCONOMY LOGO 1.png";
import profileLogo from "../assets/images/profile.png";
import "../assets/css/topbar.css";

const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="left-bar">
        <div className="">
          <img src={harmburger} alt="" onClick={() =>  {
            document.querySelector("nav").classList.toggle("open")
            document.querySelector(".content").classList.toggle("spread")
          }} />
        </div>
        <div className="search-wrapper">
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>
      <div className="right-bar">
        <div className="text">Welcome back Shola!</div>
        <div>
          <img src={profileLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
