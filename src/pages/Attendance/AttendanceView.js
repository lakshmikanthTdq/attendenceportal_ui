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
import { attendenceDailycolumns, attendenceDailyData, weeklyMonthlycolumns, weeklyMonthlyData } from '../../_localdata/attendencedata';
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



function AttendanceView() {

  // variable declarations 
  const [isRightsidePannel, setIsRightsidePannel] = useState(false);
  const [pannelTitle, setPannelTitle] = useState("Add Business");
  const [actionBtn, setActionBtn] = useState("Save");
  const [HandlerType, setHandlerType] = useState("daily");

  const onChange = (key) => {
    console.log(key);
    if(key === "1"){
      setHandlerType("daily")
    } else {
      setHandlerType("weekly")
    }
  };

  const onChangeTableHandler = (type, object) => {
    if (type === "edit") {
      console.log("edit", object);
     setPannelTitle("Employee Details")
      setActionBtn("Update")
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
            filterby={"Search by Keyword"}
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
            columns={weeklyMonthlycolumns}
            data={weeklyMonthlyData}
            filterby={"Search by Keyword"}
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
            columns={weeklyMonthlycolumns}
            data={weeklyMonthlyData}
            filterby={"Search by Keyword"}
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
    </>
  );
}
const ComponentRenderData = (props) => {

  if (props.handler === "daily") {
  return (
    <>
    <div className="salarieseditbox">
      <div>
        <div className="trUserIcon1">
          <img src={`https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/user_icon.png`} alt="userprofileicon" />
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
    
       <div className="timefields">
        <label for="Start Time">Start Time</label>
        <Input placeholder="Start Time" bordered={false} className="timefieldtext"  />
       </div>
       <div className="timefields">
          <label for="End Time">End Time</label>
          <Input placeholder="End Time" bordered={false} className="timefieldtext" />
        </div>
        <div className="timefields" style={{marginTop:"40px"}}>
          <label for="Total Hours">Total Hours</label>
          <Input placeholder="Total Hours" bordered={false} className="timefieldtext" />
        </div>
    </div>

      <Button type="" className="attendancesavebtn" onClick={() => props.onReceivechildProps(false, "close")} >Save </Button>
    </>
  );
  } else {
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
    
       <div className="timefields">
        <label for="Regular Time">Regular Time</label>
        <Input placeholder="Regular Time" bordered={false} className="timefieldtext"  />
       </div>
        <div className="timefields" >
          <label for="Overtime Hours">Overtime Hours</label>
          <Input placeholder="Overtime Hours" bordered={false} className="timefieldtext" />
        </div>
       <div className="timefields" style={{marginTop:"40px"}}>
          <label for="Total hours">Total hours</label>
          <Input placeholder="Total hours" bordered={false} className="timefieldtext" />
        </div>
    </div>

      <Button type="" className="attendancesavebtn" onClick={() => props.onReceivechildProps(false, "close")} >Save </Button>
    </>
  );
}
} 


export default AttendanceView;

const pannelobj = {
  title: "Employee Details ",
  description: "",
  // bgImage: "https://lakshmikanthtdq.github.io/attendenceportal_ui/assests/img/AddDocumentsIcon.svg",
};

export const config = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
  isSearchbox: true,
  isAction: true,
  isAddNew: false,
  isActionleft: false,
  isTableAction: true
};