import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";




function Header() {
  
  return (
   
    <div className="header">
      <div className="tdqlogobackground">
      <img src="/assests/tdqlogo.png" alt="logo" className="tdqimage" />
      </div>
      <div className="profilesettingsmenuicons">
      <span style={{position: "relative"}}>
        <BiSolidBell style={{color: "#FFFFFF", fontSize: "30px",marginTop:"-76px"}} className="notification active"/>
        <span></span>
      </span>
      <IoMdSettings style={{color: "#FFFFFF", fontSize: "30px"}}/>
      <IoPersonCircle style={{color: "#FFFFFF", fontSize: "30px"}}/>
       <span>Profile</span>
     
      {/* <span>profile</span> */}
      </div>
      {/* temporory purpose */}
      {/* <nav>
        <Link style={{margin: "0 37px"}} to="/layout/customermanagement/view">Customer Management</Link>
        <Link style={{margin: "0 37px"}} to="/layout/employees/view">Employees</Link>
        <Link style={{margin: "0 37px"}} to="/layout/attendance/view">Attendance</Link>
        <Link style={{margin: "0 37px"}} to="/layout/reports/view">Reports</Link>
        <Link style={{margin: "0 37px"}} to="/layout/salaries/view">Salaries</Link>
      </nav> */}
    </div>
   
  );
}

export default Header;