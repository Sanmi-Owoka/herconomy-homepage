import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../assets/css/layout.css";
import Content from "./Content";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Topbar />
        <div className="body-wrapper">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  );
};

export default Layout;
