import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { Button } from "antd";
import { Input } from "antd";
import { Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "./Salaries.css";
import RightsidePannel from "../RightsidePannel/RightsidePannel";

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
  };

  return (
    <div>
      <div className="salaries">
        <Space size="small" className="employetext">
          <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          <p>SALARIES</p>
        </Space>
        <Space size="middle" className="salarybuttons">
          <Button className="seesummarybtn">See Summary</Button>
          <Button className="finalisepayrollbtn">Finalise Payroll</Button>
        </Space>
      </div>
      <div
        className="addbuss"
        onClick={() => setIsRightsidePannel(true)}
      >
        <IoAddCircle className="addicon" />
        <h4 className="addnewdocumenttext">Add New Entry</h4>
      </div>
      {isRightsidePannel ? (
        <RightsidePannel
          componentData={
            <ComponentRenderData onReceivechildProps={onReceivePropsHandler} />
          }
          componentLayout={pannelobj}
          onReceiveProps={onReceivePropsHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const ComponentRenderData = (props) => {
  return (
    <>
      <div className="salariessidepannel">
        <img src="/assests/useraddicon.svg" alt="" />
      </div>

      <h4 className="useraddicontxt">
        The word ‘lorem’ for example, isn’t a real Latin word,
      </h4>
      <Input placeholder="User Name" style={{ height: "50px" }} />

      <Space size="large">
        <Input
          placeholder="Days"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
        <Input
          placeholder="No of OT"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
      </Space>
      <Space size="large">
        <Input
          placeholder="Salary"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
        <Input
          placeholder="OT"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
      </Space>
      <Space size="large">
        <Input
          placeholder="Advance"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
        <Input
          placeholder="Deduction"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
      </Space>
      <Space size="large">
        <Input
          placeholder="Remaining"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
        <Input
          placeholder="Total Pay"
          style={{ height: "50px", marginTop: "40px", width: 250 }}
        />
      </Space>
      <Input
        placeholder="Pay By"
        style={{
          height: "50px",
          marginTop: "40px",
          width: 250,
          marginRight: "290px",
        }}
      />

      <Button type="" className="savebtn1">
        Save{" "}
      </Button>
    </>
  );
};

export default CustomermanagementView;

const pannelobj = {
  title: "Add New Entry ",
  description: "",
  // bgImage: "/assests/img/AddDocumentsIcon.svg",
};
