import React from "react";
import './Employeeview.css'
import {  Space } from 'antd';
import { GoPersonFill } from "react-icons/go";



function EmployeesView() {
  
  return (
    <>
    <div >
      <Space size="small" className="employetext">
   <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }}/>
   <p>EMPLOYEE</p>
    </Space>
    </div>
  
    </>
  );
}

export default EmployeesView;