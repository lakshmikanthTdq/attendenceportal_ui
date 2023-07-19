import React from "react";
import "./CustomerManagementview.css";

function CustomerManagementView() {
  return (
    <div className="landing">
      <img src="/assests/landingbackground.png" alt="profile"    />

        <div className="widgets">
          <div className="card">
            <img src="/assests/customer-managementicon.png" alt="customer-management"  />
            <p >Customer <br/> Management</p>
          </div>
          <div className="card ">
            <img src="/assests/employeesicon.png" alt="employees"  />
            <p >Employees</p>
          </div>
          <div className="card">
            <img src="/assests/attendanceicon.png" alt="attendance"  />
            <p >Attendance</p>
          </div>
          <div className="card">
            <img src="/assests/reportsicon.png" alt="reports"  />
            <p >Reports</p>
          </div>
          <div className="card">
            <img src="/assests/salariesicon.png" alt="salaries"  />
            <p >Salaries</p>
          </div>
        </div>

        {/* <div className="card">
    <img src="/assests/customer-managementicon.png" alt="customer-management"   />
    </div>

    <div className="card">
    <img src="/assests/employeesicon.png" alt="employees"   />
    </div>

    <div className="card">
    <img src="/assests/attendanceicon.png" alt="attendance"   />
    </div>

    <div className="card">
    <img src="/assests/reportsicon.png" alt="reports"   />
    </div>

    <div className="card">
    <img src="/assests/salariesicon.png" alt="salaries"   />
    </div> */}
      <div className="arrow">
      <img src="/assests/peoplearrowicon.png" alt="arrowicon"    />
      </div>
    </div>
  );
}

export default CustomerManagementView;
