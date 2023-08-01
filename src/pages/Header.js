import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Badge, Space, Select } from "antd";

function Header() {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          logout
        </a>
      ),
    },
  ];

  const selectList= [
    {
      value: 'Business01',
      label: 'Business01',
    },
    {
      value: 'Business02',
      label: 'Business02',
    },
    {
      value: 'Business03',
      label: 'Business03',
    },
    {
      value: 'Business04',
      label: 'Business04',
    },
    // {
    //   value: 'Business05',
    //   label: 'Business05',
    // },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="header">
      <div className="tdqlogobackground">
        <img
          src="https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/tdqlogo.png"
          alt="logo"
          className="tdqimage"
          onClick={() => {
            navigate("/layout/landing");
          }}
        />
      </div>
      


      <Space size="large">
     <Select className="headerselectcomp"
      defaultValue=""
      style={{
        width: 220,
      }}
      onChange={handleChange}
      options={selectList}
    />
        <Badge count={5}>
          
          <BiSolidBell style={{ color: "#FFFFFF", fontSize: "40px" }} />
        </Badge>
        <IoMdSettings style={{ color: "#FFFFFF", fontSize: "40px" }} />
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <IoPersonCircle style={{ color: "#FFFFFF", fontSize: "40px" }}  />
              
            </Space>
          </a>
        </Dropdown>
        <div></div>
      </Space>
    </div>
  );
}

export default Header;
