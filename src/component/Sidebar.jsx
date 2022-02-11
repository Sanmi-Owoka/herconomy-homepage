import React from "react";
import "../assets/css/sidebar.css"

const Sidebar = () => {
  return (
    <nav className="open">
      <ul>
        <li>
          <a href="/" className="active">Home</a>
        </li>
        <li>
          <a href="/">Savings</a>
        </li>
        <li>
          <a href="/">Discounts</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
