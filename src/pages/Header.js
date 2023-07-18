import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  
  return (
    <div className="d-flex justify-content-between">
      <h1>Header</h1>
      {/* temporory purpose */}
      <nav>
        <Link style={{margin: "0 37px"}} to="/layout/customermanagement/view">Customer Management</Link>
        <Link style={{margin: "0 37px"}} to="/layout/employees/view">Employees</Link>
        <Link style={{margin: "0 37px"}} to="/layout/attendance/view">Attendance</Link>
        <Link style={{margin: "0 37px"}} to="/layout/reports/view">Reports</Link>
        <Link style={{margin: "0 37px"}} to="/layout/salaries/view">Salaries</Link>
      </nav>
    </div>
  );
}

export default Header;