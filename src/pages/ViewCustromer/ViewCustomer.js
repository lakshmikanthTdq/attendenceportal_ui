import React from "react";
import { Space } from "antd";
import { GoPersonFill } from "react-icons/go";
import { Tabs } from "antd";
import { DynamicTable } from "../../components/DynamicTable/DynamicTable";
import {
  attendenceDailycolumns,
  attendenceDailyData,
} from "../../_localdata/attendencedata";
import "./ViewCustomer.css";
import { RiEditBoxFill } from "react-icons/ri";

const onChangeTableHandler = (type, object) => {
  if (type === "edit") {
    console.log("edit", object);
  } else if (type === "delete") {
    console.log("delete", object);
  } else if (type === "advance") {
    console.log("advance", object);
  }
};

const onChangeSearchHandler = (keyword) => {};

const onFilterHandler = (type) => {};

const eventhandlers = {
  onTableHandler: onChangeTableHandler,
  onSearchHandler: onChangeSearchHandler,
  onFilterHandler: onFilterHandler,
};
const onChange = (key) => {
  console.log(key);
};

const ViewCustomer = () => {
  const items = [
    {
      key: "1",
      label: `Customer`,
      children: (
        <>
          <div className="customers">
            <Space size="small">
              <span className="yellowcircle"></span>
              <p>Biryani and More</p>
            </Space>
            <Space size="small">
              <RiEditBoxFill style={{ color: "#959595", fontSize: "25px" }} />
              <p>Edit</p>
            </Space>
          </div>

          <div className="customerdetails">
            <p>Contact person details :</p>
            <p>Registered address :</p>
            <p>Website :</p>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: `Outlets`,
      children: (
        <>
          <DynamicTable
            config={config}
            columns={attendenceDailycolumns}
            data={attendenceDailyData}
            filterby={"Search by Business Name"}
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
          <DynamicTable
            config={config}
            columns={attendenceDailycolumns}
            data={attendenceDailyData}
            filterby={"Search by Business Name"}
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
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;

export const config = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
};
