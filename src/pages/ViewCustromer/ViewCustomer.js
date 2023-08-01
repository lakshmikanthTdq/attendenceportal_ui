import React, { useState, useEffect } from "react";
import { GoPersonFill } from "react-icons/go";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { Input, Button, Space, Select } from 'antd';
import RightsidePannel from '../RightsidePannel/RightsidePannel';
import { IoAddCircle } from "react-icons/io5";

import { DynamicTable } from "../../components/DynamicTable/DynamicTable";
import { OutletsColumns, OutletsData, UserInfoColumns, UserInfoData } from "../../_localdata/customermanagementdata";
import "./ViewCustomer.css";
import { RiEditBoxFill } from "react-icons/ri";


const ViewCustomer = () => {
  const navigate = useNavigate();
  const [isRightsidePannel, setIsRightsidePannel] = useState(false);
  const [pannelTitle, setPannelTitle] = useState("Edit Business");
  const [actionBtn, setActionBtn] = useState("Update");
  const [activetab, setActivetab] = useState("1")
  const [HandlerType, setHandlerType] = useState("entry");

  const onReceivePropsHandler = (pannel, load) => {
    if (load === "getFetch") {
      setIsRightsidePannel(pannel);
    } else if (load === "close") {
      setIsRightsidePannel(pannel);
    }
  }

  const onChangeTableHandler = (type, object) => {
    if (type === "edit") {
      if(activetab === "1"){

      } else if(activetab === "2"){
        setPannelTitle("Edit Outlet")
        setIsRightsidePannel(true);
        setActionBtn("Update")
        setHandlerType("edit")
      } else if(activetab === "3"){
        setPannelTitle("Edit User")
        setIsRightsidePannel(true);
        setActionBtn("Update")
        setHandlerType("userinfo")

      }
      
    } else if (type === "delete") {
      console.log("delete", object);
    } else if (type === "edit") {
      console.log("edit", object);
    }
  };
  
  
  const onChangeSearchHandler = (keyword) => { };
  
  const onFilterHandler = (type) => { };
  
  const eventhandlers = {
    onTableHandler: onChangeTableHandler,
    onSearchHandler: onChangeSearchHandler,
    onFilterHandler: onFilterHandler,
  };
  const onChange = (key) => {
    setActivetab(key);
  };

  const onClickMethod = () => {
    alert("hai");
  }
  const items = [
    {
      key: "1",
      label: `Customer`,
      children: (
        <>
          <div className="customers">
            <Space size="small">
           

              <img src={`https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/user_icon.png`} alt="userprofileicon" className="trUserIcon2" />
              <p>Biryani and More</p>
          
             
            </Space>
            <Space size="small" onClick={() => {
              setIsRightsidePannel(true);
              setPannelTitle("Edit Business")
              setActionBtn("Update")
              setHandlerType("entry")
            }}>

              <RiEditBoxFill style={{ color: "#959595", fontSize: "25px", marginTop:"11px" }} />
              <p>Edit</p>
            </Space>

          </div>


          <div className="customerdetails">
            <div>
              <p>Contact person details   :</p>
              <p>Registered address     :</p>
              <p>Website      :</p>
            </div>

            <div className="viewcustomercards">
              <div className="customercard" onClick={() => {onChange("2")}}>
                <p>Outlets</p>
                <span>43</span>
              </div>
              <div className="customercard" onClick={() => {onChange("3")}}>
                <p>Users</p>
                <span>62</span>
              </div>
            </div>
          </div>
        </>

      ),
    },
    {
      key: "2",
      label: `Outlets`,
      children: (
        <>
          <div className='addbussiness'
            onClick={() => {
              setIsRightsidePannel(true);
              setPannelTitle("Add Outlet")
              setActionBtn("Save")
              setHandlerType("edit")
            }}
          >
            <IoAddCircle className='addicon' />
            <h4 className="addbusinesstext">Add Outlet</h4>
          </div>
          <DynamicTable
            config={Outletconfig}
            columns={OutletsColumns}
            data={OutletsData}
            filterby={"Search by Keyword"}
            events={eventhandlers}
          />
        </>
      ),
    },
    {
      key: "3",
      label: `User Info`,
      children: (
        <>
        <div className='addbussiness'
            onClick={() => {
              setIsRightsidePannel(true);
              setPannelTitle("Add User")
              setActionBtn("Save")
              setHandlerType("userinfo")
            }}
          >
            <IoAddCircle className='addicon' />
            <h4 className="addbusinesstext">Add User</h4>
          </div>
          <DynamicTable
            config={Userconfig}
            columns={UserInfoColumns}
            data={UserInfoData}
            filterby={"Search by Keyword"}
            events={eventhandlers}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <div>
        <Space size="small">
          <div className="customermanagementicon">
            <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          </div>
          <p id="customermanagementtext">CUSTOMER MANAGEMENT</p>
        </Space>
      </div>
      <div className="tablecard">
        <div className="attendancetabs">
          <Tabs activeKey={activetab} items={items} onChange={onChange} />
        </div>
      </div>
      {isRightsidePannel ? (
        <RightsidePannel
          componentData={
            <ComponentRenderData
              onReceivechildProps={onReceivePropsHandler}
              actionbtn={actionBtn}
              handler={HandlerType} 
            />
          }
          componentLayout={pannelTitle}
          onReceiveProps={onReceivePropsHandler}
        />
      ) : (
        ""
      )}
    </div>


  );

};
const ComponentRenderData = (props) => {
  if (props.handler === "entry") {

  return (
    
    <>
      {/* <img src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/useraddicon.svg" alt="" /> */}
      <div>
        <svg id="_x32_9_Change_Picture" xmlns="http://www.w3.org/2000/svg" width="72" height="75.316" viewBox="0 0 72 75.316">
          <g id="Group_5230" data-name="Group 5230" transform="translate(0 0)">
            <path id="Path_16456" data-name="Path 16456" d="M31.888,31.776A7.888,7.888,0,1,0,24,23.888,7.9,7.9,0,0,0,31.888,31.776Z" transform="translate(3.045 2.03)" fill="#a8a8a8" />
            <path id="Path_16457" data-name="Path 16457" d="M38.157,32H26.888A7.9,7.9,0,0,0,19,39.888v2.254a3.385,3.385,0,0,0,3.381,3.381H42.664a3.385,3.385,0,0,0,3.381-3.381V39.888A7.9,7.9,0,0,0,38.157,32Z" transform="translate(2.41 4.06)" fill="#a8a8a8" />
            <path id="Path_16459" data-name="Path 16459" d="M5.634,34.933A29.3,29.3,0,1,1,60.27,49.582H63.1a4.981,4.981,0,0,1,3,1.063A34.928,34.928,0,1,0,47.328,67.584V61.459A29.262,29.262,0,0,1,5.634,34.933Z" transform="translate(0 0)" fill="#a8a8a8" />
            <path id="Path_16460" data-name="Path 16460" d="M52.981,52.075a5.219,5.219,0,0,1,3.693-3.248A27.134,27.134,0,1,0,46.44,58.058v-.349a5.641,5.641,0,0,1,5.634-5.634Zm-3.16-6.761a5.641,5.641,0,0,1-5.634,5.634H23.9a5.641,5.641,0,0,1-5.634-5.634V43.06A10.148,10.148,0,0,1,27.73,32.952a10.142,10.142,0,1,1,12.63,0A10.148,10.148,0,0,1,49.821,43.06Z" transform="translate(0.888 0.888)" fill="none" />
            <circle id="Ellipse_178" data-name="Ellipse 178" cx="14" cy="14" r="14" transform="translate(44 47.316)" fill="#a8a8a8" />
            <g id="Group_5509" data-name="Group 5509" transform="translate(51.768 55.614)">
              <rect id="Rectangle_2932" data-name="Rectangle 2932" width="3.045" height="12.79" rx="1.523" transform="translate(5.039 0)" fill="#fff" />
              <rect id="Rectangle_2933" data-name="Rectangle 2933" width="2.436" height="13.401" rx="1.218" transform="translate(13.401 5.152) rotate(90)" fill="#fff" />
            </g>
          </g>
        </svg>
      </div>
      <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
      <Input placeholder=" BusinessName" style={{ height: "50px" }} />
      <Input placeholder="Street Address" style={{ height: "50px", marginTop: "30px" }} />
      < Space size="large" >
        <Select className='countrystate'
          size="large"
          defaultValue="Country"
          style={{
            width: 250, marginTop: "40px",
          }}
          options={
            [{
              value: "India",
              label: "India"
            },
            {
              value: "USA",
              label: "USA"
            },
            {
              value: "Canada",
              label: "Canada"
            }]
          }
        />
        <Select className='countrystate'
          size="large"
          defaultValue="State"
          style={{
            width: 250, marginTop: "40px",
          }}
          options={
            [{
              value: "Andhra Pradesh",
              label: "Andhra Pradesh"
            },
            {
              value: "Assam",
              label: "Assam"
            },
            {
              value: "Telangana",
              label: "Telangana"
            }]
          }
        />

      </ Space>
      < Space size="large" >
        <Input placeholder="Contact Person Details" style={{ height: "50px", marginTop: "40px", width: 250 }} />
        <Input placeholder="URL" style={{ height: "50px", marginTop: "40px", width: 250 }} />

      </ Space>
      <Button type="" className="savebtn" onClick={() => props.onReceivechildProps(false, "close")}  >{props.actionbtn}  </Button>


    </>
  );
} else if (props.handler === "edit") {
  return(
    <>
    {/* <img src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/useraddicon.svg" alt="" /> */}
    <div>
      <svg id="_x32_9_Change_Picture" xmlns="http://www.w3.org/2000/svg" width="72" height="75.316" viewBox="0 0 72 75.316">
        <g id="Group_5230" data-name="Group 5230" transform="translate(0 0)">
          <path id="Path_16456" data-name="Path 16456" d="M31.888,31.776A7.888,7.888,0,1,0,24,23.888,7.9,7.9,0,0,0,31.888,31.776Z" transform="translate(3.045 2.03)" fill="#a8a8a8" />
          <path id="Path_16457" data-name="Path 16457" d="M38.157,32H26.888A7.9,7.9,0,0,0,19,39.888v2.254a3.385,3.385,0,0,0,3.381,3.381H42.664a3.385,3.385,0,0,0,3.381-3.381V39.888A7.9,7.9,0,0,0,38.157,32Z" transform="translate(2.41 4.06)" fill="#a8a8a8" />
          <path id="Path_16459" data-name="Path 16459" d="M5.634,34.933A29.3,29.3,0,1,1,60.27,49.582H63.1a4.981,4.981,0,0,1,3,1.063A34.928,34.928,0,1,0,47.328,67.584V61.459A29.262,29.262,0,0,1,5.634,34.933Z" transform="translate(0 0)" fill="#a8a8a8" />
          <path id="Path_16460" data-name="Path 16460" d="M52.981,52.075a5.219,5.219,0,0,1,3.693-3.248A27.134,27.134,0,1,0,46.44,58.058v-.349a5.641,5.641,0,0,1,5.634-5.634Zm-3.16-6.761a5.641,5.641,0,0,1-5.634,5.634H23.9a5.641,5.641,0,0,1-5.634-5.634V43.06A10.148,10.148,0,0,1,27.73,32.952a10.142,10.142,0,1,1,12.63,0A10.148,10.148,0,0,1,49.821,43.06Z" transform="translate(0.888 0.888)" fill="none" />
          <circle id="Ellipse_178" data-name="Ellipse 178" cx="14" cy="14" r="14" transform="translate(44 47.316)" fill="#a8a8a8" />
          <g id="Group_5509" data-name="Group 5509" transform="translate(51.768 55.614)">
            <rect id="Rectangle_2932" data-name="Rectangle 2932" width="3.045" height="12.79" rx="1.523" transform="translate(5.039 0)" fill="#fff" />
            <rect id="Rectangle_2933" data-name="Rectangle 2933" width="2.436" height="13.401" rx="1.218" transform="translate(13.401 5.152) rotate(90)" fill="#fff" />
          </g>
        </g>
      </svg>
    </div>
    <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
    <Input placeholder=" Name" style={{ height: "50px" }} />
    <Input placeholder="Street Address" style={{ height: "50px", marginTop: "30px" }} />
    < Space size="large" >
      <Select className='countrystate'
        size="large"
        defaultValue="Country"
        style={{
          width: 250, marginTop: "40px",
        }}
        options={
          [{
            value: "India",
            label: "India"
          },
          {
            value: "USA",
            label: "USA"
          },
          {
            value: "Canada",
            label: "Canada"
          }]
        }
      />
      <Select className='countrystate'
        size="large"
        defaultValue="State"
        style={{
          width: 250, marginTop: "40px",
        }}
        options={
          [{
            value: "Andhra Pradesh",
            label: "Andhra Pradesh"
          },
          {
            value: "Assam",
            label: "Assam"
          },
          {
            value: "Telangana",
            label: "Telangana"
          }]
        }
      />

    </ Space>
    < Space size="large" >
      <Input placeholder="Contact Person Details" style={{ height: "50px", marginTop: "40px", width: 250 }} />
      <Input placeholder="Contact Person Number" style={{ height: "50px", marginTop: "40px", width: 250 }} />

    </ Space>
    <Button type="" className="savebtn"  onClick={() => props.onReceivechildProps(false, "close")} >{props.actionbtn}  </Button>


  </>
  )
} else if (props.handler === "userinfo") {
  return(
    <>
      {/* <img src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/useraddicon.svg" alt="" /> */}
      <div>
        <svg id="_x32_9_Change_Picture" xmlns="http://www.w3.org/2000/svg" width="72" height="75.316" viewBox="0 0 72 75.316">
          <g id="Group_5230" data-name="Group 5230" transform="translate(0 0)">
            <path id="Path_16456" data-name="Path 16456" d="M31.888,31.776A7.888,7.888,0,1,0,24,23.888,7.9,7.9,0,0,0,31.888,31.776Z" transform="translate(3.045 2.03)" fill="#a8a8a8" />
            <path id="Path_16457" data-name="Path 16457" d="M38.157,32H26.888A7.9,7.9,0,0,0,19,39.888v2.254a3.385,3.385,0,0,0,3.381,3.381H42.664a3.385,3.385,0,0,0,3.381-3.381V39.888A7.9,7.9,0,0,0,38.157,32Z" transform="translate(2.41 4.06)" fill="#a8a8a8" />
            <path id="Path_16459" data-name="Path 16459" d="M5.634,34.933A29.3,29.3,0,1,1,60.27,49.582H63.1a4.981,4.981,0,0,1,3,1.063A34.928,34.928,0,1,0,47.328,67.584V61.459A29.262,29.262,0,0,1,5.634,34.933Z" transform="translate(0 0)" fill="#a8a8a8" />
            <path id="Path_16460" data-name="Path 16460" d="M52.981,52.075a5.219,5.219,0,0,1,3.693-3.248A27.134,27.134,0,1,0,46.44,58.058v-.349a5.641,5.641,0,0,1,5.634-5.634Zm-3.16-6.761a5.641,5.641,0,0,1-5.634,5.634H23.9a5.641,5.641,0,0,1-5.634-5.634V43.06A10.148,10.148,0,0,1,27.73,32.952a10.142,10.142,0,1,1,12.63,0A10.148,10.148,0,0,1,49.821,43.06Z" transform="translate(0.888 0.888)" fill="none" />
            <circle id="Ellipse_178" data-name="Ellipse 178" cx="14" cy="14" r="14" transform="translate(44 47.316)" fill="#a8a8a8" />
            <g id="Group_5509" data-name="Group 5509" transform="translate(51.768 55.614)">
              <rect id="Rectangle_2932" data-name="Rectangle 2932" width="3.045" height="12.79" rx="1.523" transform="translate(5.039 0)" fill="#fff" />
              <rect id="Rectangle_2933" data-name="Rectangle 2933" width="2.436" height="13.401" rx="1.218" transform="translate(13.401 5.152) rotate(90)" fill="#fff" />
            </g>
          </g>
        </svg>
      </div>
      <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
      <Input placeholder=" BusinessName" style={{ height: "50px" }} />
      <Input placeholder="Email Address" style={{ height: "50px", marginTop: "30px" }} />
      <Input placeholder="Contact Number" style={{ height: "50px", marginTop: "30px" }} />
      <Input placeholder="Job Title" style={{ height: "50px", marginTop: "30px" }} />
      <Input placeholder="Outlets" style={{ height: "50px", marginTop: "30px" }} />
      <Input placeholder="Permissions" style={{ height: "50px", marginTop: "30px" }} />
    
     
      <Button type="" className="savebtn" onClick={() => props.onReceivechildProps(false, "close")}  >{props.actionbtn}  </Button>


    </>
  )
}



};


export default ViewCustomer;


export const Outletconfig = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
  isSearchbox: true,
  isAction: false,
  isAddNew: true,
  isActionleft: false,
  isTableAction: true
}

export const Userconfig = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
  isSearchbox: true,
  isAction: false,
  isAddNew: true,
  isActionleft: false,
  isTableAction: true
}