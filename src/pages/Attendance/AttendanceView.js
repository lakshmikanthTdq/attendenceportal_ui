import "./attendance.css";
import React ,{ useState} from "react";
import { GoPersonFill } from "react-icons/go";
import { Tabs } from "antd";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import { Input,Button,Space,Select } from 'antd';
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DynamicTable } from "../../components/DynamicTable/DynamicTable";
import RightsidePannel from '../RightsidePannel/RightsidePannel';
import { attendenceDailycolumns, attendenceDailyData } from '../../_localdata/attendencedata';
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

function AttendanceView() {

  const onChangeTableHandler = (type, object) => {
    if (type === "edit") {
      console.log("edit", object);
      setIsRightsidePannel(true);

    }
    else if (type === "delete") {
      console.log("delete", object)

    }
    else if (type === "advance") {
      console.log("advance", object)
    }
  }

  const onChangeSearchHandler = (keyword) => {

  }

  const onFilterHandler = (type) => {

  }
  const navigate = useNavigate();
  const [isRightsidePannel, setIsRightsidePannel] = useState(false);
  const onReceivePropsHandler = (pannel, load) => {
    if (load === "getFetch") {
      setIsRightsidePannel(pannel);
    } else if (load === "close") {
      setIsRightsidePannel(pannel);
    }
  }

  const eventhandlers = {
    onTableHandler: onChangeTableHandler,
    onSearchHandler: onChangeSearchHandler,
    onFilterHandler: onFilterHandler
  }

  // render tabs
  const items = [
    {
      key: "1",
      label: `Daily`,
      children: (
        <>
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
      key: "2",
      label: `Weekly`,
      children: (
        <>
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
      label: `Monthly`,
      children: (
        <>
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
    <>
      <div>
        <Space size="small" className="employetext">
          <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          <p>ATTENDANCE</p>
        </Space>
      </div>
      <div className="tablecard">
        <div className="attendancetabs">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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
     
    <div className="salarieseditbox">
      <div>
      <div className="trUserIcon1">
           
            <img src={`/assests/user_icon.png`} alt="userprofileicon" />
           
          </div>
          <div className="attendaceedittxt">

        <p className="salariesedittext1">
          Chandu
        </p>
        <p className="salariesedittext2">
          Outlet 03
        </p>
        </div>
        </div>

        <div>
        <p className="salariesedittext3">
          Part-Time
        </p>
       
      </div>
      

    </div>
    <div className="atendancefeildsedit">
    < Space size="large" >
        <Input placeholder="Start Time" style={{ height: "50px", marginTop: "40px", width: 250 }} />
        <Input placeholder="End Time" style={{ height: "50px", marginTop: "40px", width: 250 }} />


      </ Space>
    < Space size="large" >

      <Input placeholder="Total Hours" style={{ height: "50px", marginTop: "40px", width: 250,marginRight:"270px" }} />
      </ Space>
      </div>
      <Button type="" className="savebtn5" >Save </Button>


    </>
  );
};


export default AttendanceView;

const pannelobj = {
  title: "Employee Details ",
  description: "",
  // bgImage: "/assests/img/AddDocumentsIcon.svg",
};
export const config = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
}