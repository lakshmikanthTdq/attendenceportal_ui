import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  
  return (
    <>
     <div style={{backgroundColor:"#D41317"}}>
      <Header />
      <div style={{background: "#fff", marginTop: "5px", height: "calc(100vh - 92px)", borderRadius:"20px"}}>
        <Outlet />
      </div>
      </div>
    </>
  );
}

export default Layout;