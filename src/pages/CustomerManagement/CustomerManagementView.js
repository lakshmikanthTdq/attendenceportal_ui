import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { Input } from 'antd';
import { Select, Space } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './CustomerManagementview.css'
import RightsidePannel from '../RightsidePannel/RightsidePannel'

const CustomermanagementView = () => {
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
    <div>
        <div className='addbuss'
        style={{ display: "flex", height: "34px", gap: "10px" }}
        onClick={() => setIsRightsidePannel(true)}
      >
         <IoAddCircle  className='addicon'/>
        <h4 className="addnewdocumenttext">Add Bussiness</h4>

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
  )
}

const ComponentRenderData = (props) => {
   
  
    return (
      <>
        <img src="/assests/useraddicon.svg" alt="" />
       <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
       <Input placeholder="Name" style={{height:"50px"}}/> 
       <Input placeholder="Street Address" style={{height:"50px", marginTop:"30px"}}/> 
       < Space size="large" >
       <Select 
       size="large"
      defaultValue="Country"
      style={{
        width: 250, marginTop:"40px",
      }}
      options={
        [{value:"India",
        label:"India"},
        {value:"USA",
        label:"USA"},
        {value:"Canada",
        label:"Canada"}]
      }
    />
      <Select 
       size="large"
      defaultValue="State"
      style={{
        width: 250, marginTop:"40px",
      }}
      options={
        [{value:"Andhra Pradesh",
        label:"Andhra Pradesh"},
        {value:"Assam",
        label:"Assam"},
        {value:"Telangana",
        label:"Telangana"}]
      }
    />

       </ Space>
       < Space size="large" >
       <Input placeholder="Contact Person Details" style={{height:"50px", marginTop:"40px",width :250 }}/> 
       <Input placeholder="Contact Person Details" style={{height:"50px", marginTop:"40px",width :250 }}/> 

        </ Space>
        <Button type="" className="savebtn" >Save </Button>
      
      
      </>
    );
  };

export default CustomermanagementView


const pannelobj = {
    title: "Add Business ",
    description: "",
    // bgImage: "/assests/img/AddDocumentsIcon.svg",
  };







