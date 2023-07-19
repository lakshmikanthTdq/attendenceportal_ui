import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  
  return (
    <>
     <div style={{backgroundColor:"#D41317"}}>
      <Header />
      <Outlet />
      </div>
    </>
  );
}

export default Layout;