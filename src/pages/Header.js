import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Badge, Space } from "antd";

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
  return (
    <div className="header">
      <div className="tdqlogobackground">
        <img
          src="/assests/tdqlogo.png"
          alt="logo"
          className="tdqimage"
          onClick={() => {
            navigate("/layout/landing");
          }}
        />
      </div>
      <Space size="large">
        <Badge count={5}>
          
          <BiSolidBell style={{ color: "#FFFFFF", fontSize: "30px" }} />
        </Badge>
        <IoMdSettings style={{ color: "#FFFFFF", fontSize: "30px" }} />
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <IoPersonCircle style={{ color: "#FFFFFF", fontSize: "30px" }} />
            </Space>
          </a>
        </Dropdown>
        <div></div>
      </Space>
    </div>
  );
}

export default Header;
