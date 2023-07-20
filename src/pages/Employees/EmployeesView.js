import React, { useState, useEffect } from 'react';
import './Employeeview.css'
import { GoPersonFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { Input } from 'antd';
import { Select, Space } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import RightsidePannel from '../RightsidePannel/RightsidePannel'




function EmployeesView() {

  const [isRightsidePannel, setIsRightsidePannel] = useState(true);
  const navigate = useNavigate();
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onReceivePropsHandler = (pannel, load) => {
      if (load === "getFetch") {
          setIsRightsidePannel(pannel);
      } else if (load === "close") {
          setIsRightsidePannel(pannel);
      }
  }
  
  return (
    <>
    <div >
      <Space size="small" className="employetext">
   <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }}/>
   <p>EMPLOYEE</p>
    </Space>
    </div>
    <div>
        <div className='addbuss'
        style={{ display: "flex", height: "34px", gap: "10px" }}
        onClick={() => setIsRightsidePannel(true)}
      >
         <IoAddCircle  className='addicon'/>
        <h4 className="addnewdocumenttext">Add Employee</h4>

      </div>
      {isRightsidePannel ? (
        <RightsidePannel
          componentData={
            <ComponentRenderData
              onReceivechildProps={onReceivePropsHandler}
            />
          }
          componentLayout={pannelobj}
          onReceiveProps={onReceivePropsHandler}
        />
      ) : (
        ""
      )}
      

    </div>
  
    </>
  );
}
const ComponentRenderData = (props) => {
   
  
  return (
    <>
      <img src="/assests/useraddicon.svg" alt="" />
     <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
     <Input placeholder="Name" style={{height:"50px"}}/> 
     <Input placeholder="DOB" style={{height:"50px", marginTop:"30px"}}/> 
     <Input placeholder="Mobile No" style={{height:"50px", marginTop:"30px"}}/> 
     <Input placeholder="Joining Date" style={{height:"50px", marginTop:"30px"}}/> 
     <Input placeholder="Job Title" style={{height:"50px", marginTop:"30px"}}/> 
     <Input placeholder="Job Type" style={{height:"50px", marginTop:"30px"}}/> 
     <Input placeholder="Employee ID" style={{height:"50px", marginTop:"30px"}}/> 





 

      <Button type="" className="savebtn2" >Save </Button>
    
    
    </>
  );
};


export default EmployeesView;

const pannelobj = {
  title: "Add Employee  ",
  description: "",
  // bgImage: "/assests/img/AddDocumentsIcon.svg",
};
