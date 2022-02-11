import React from "react";
import Discount from "./Discount";
import downloadLogo from "../assets/images/image 4.png"
import "../assets/css/download.css"

const Download = () => {
  return (
    <div className="download">
      <Discount />
      <div className="download-image">
        <img src={downloadLogo} alt="" />
      </div>
    </div>
  );
};

export default Download;
