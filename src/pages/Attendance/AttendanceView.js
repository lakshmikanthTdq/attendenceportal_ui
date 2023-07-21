import React from "react";
import "./attendance.css";
import { Space } from "antd";
import { GoPersonFill } from "react-icons/go";
import { Tabs } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Daily`,
    children: (
      <div className="dailydata">
        <Space size="large">
          <p>Date</p>

          <DatePicker className="datepicker"
            defaultValue={dayjs("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </Space>
        <p>
          <span>Start of pay :</span> 1st jun
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: `weekly`,
    children: (
      <div className="dailydata">
        <Space size="large">
          <p>Week</p>
          <DatePicker className="datepicker"
            defaultValue={dayjs()}
            format={customWeekStartEndFormat}
            picker="week"
          />
          
        </Space>
        <p>
          <span>Start of pay :</span> 1st jun
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: `Monthly`,
    children: (
      <div className="dailydata">
        <Space size="large">
          <p>Month</p>

          <DatePicker className="datepicker"
            defaultValue={dayjs("2015/01", monthFormat)}
            format={monthFormat}
            picker="month"
          />
        </Space>
        <p>
          <span>Start of pay :</span> 1st jun
        </p>
      </div>
    ),
  },
];
function AttendanceView() {
  return (
    <>
      <div>
        <Space size="small" className="employetext">
          <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          <p>ATTENDANCE</p>
        </Space>
      </div>
      <div className="attendancetabs">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      <div className="tablecard">
        
      </div>
    </>
  );
}

export default AttendanceView;
