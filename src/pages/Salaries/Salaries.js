import React, { useState, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { Button, Input, Space,Form } from "antd";
import { useNavigate } from "react-router-dom";
import "./Salaries.css";
import RightsidePannel from "../RightsidePannel/RightsidePannel";
import { DynamicTable } from '../../components/DynamicTable/DynamicTable';
import {salariescolumns,salariesData,summaryData} from '../../_localdata/salariesdata';

const CustomermanagementView = () => {
  const [isRightsidePannel, setIsRightsidePannel] = useState(false);
  const [HandlerType, setHandlerType] = useState("entry");
  const [pannelTitle, setPannelTitle] = useState("Add Business");
  const [actionBtn, setActionBtn] = useState("Save");
  const navigate = useNavigate();
  const [finalData,setFinalData] = useState(salariescolumns)
  const [finalpay, setFinalpay] = useState(false);

  useEffect(()=>{
    if(finalpay == true){
      let actionindex = finalData.findIndex(x => x.key === "action");
       finalData.splice(actionindex, 1);
      console.log(finalData);
      setFinalData(finalData);
      config.isTableAction = false
    }
   },[finalpay])

  const onReceivePropsHandler = (pannel, load) => {
    if (load === "getFetch") {
      setIsRightsidePannel(pannel);
    } else if (load === "close") {
      setIsRightsidePannel(pannel);
    }
  };
  const onChangeTableHandler = (type, object) => {
    if (type === "edit") {
      console.log("edit", object);
      setIsRightsidePannel(true);
      setPannelTitle("Edit Employee Pay")
      setActionBtn("Update")
      setHandlerType("edit")
    }
    else if (type === "delete") {
      console.log("delete", object)

    }
    else if (type === "advance") {
      console.log("advance", object)
      setIsRightsidePannel(true);
      setHandlerType("summary")
    }
  }
  const onChangeSearchHandler = (keyword) => {

  }

  const onFilterHandler = (type) => {

  }
  // receive handlers object
  const eventhandlers = {
    onTableHandler: onChangeTableHandler,
    onSearchHandler: onChangeSearchHandler,
    onFilterHandler: onFilterHandler
  }
  return (
    <div>
      <div className="salaries">
        <Space size="small" className="employetext">
          <GoPersonFill style={{ color: "#D41317", fontSize: "30px" }} />
          <p>SALARIES</p>
        </Space>
        <Space size="middle" className="salarybuttons">
          <Button onClick={() => { setIsRightsidePannel(true); 
          setHandlerType("summary"); 
          setPannelTitle("Summary Report");
          setActionBtn("Update") }} className="seesummarybtn" > See Summary</Button>
          {/* <Button  className="seesummarybtn" > See Summary</Button> */}

          <Button className={finalpay ? "Finalisebtngreen" : "seesummarybtn" } onClick={()=>{setFinalpay(true)}}>Finalise Payroll</Button>
        </Space>
      </div>
      <div className='addbussiness'
        onClick={() => {
          setIsRightsidePannel(true);
          setPannelTitle("Add New Entry")
          setActionBtn("Save")
          setHandlerType("entry")
        }}
      >
        <IoAddCircle className='addicon' />
        <h4 className="addbusinesstext">Add New Entry</h4>
      </div>

      <DynamicTable
        config={config}
        columns={finalData}
        data={salariesData}
        filterby={"Search by Business Name"}
        events={eventhandlers}
      />

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

        <Button type="" className="addsalarybtn" onClick={() => props.onReceivechildProps(false, "close")}>
        {props.actionbtn}
        </Button>
      </>
    );
  } else if (props.handler === "summary") {
    return (
      <>
      <div >
        <table className="seesummarytxt1">
        {summaryData.map((elem)=>{
          return (
            <tr>
              <th>{elem.displayName}</th>
              <td>:</td>
              <td>{elem.value}</td>
            </tr>
          )})
      }
      </table>
        </div>

      </>
    )
  }  else if (props.handler === "edit") {
    return (
    <div className="editcontentcss">
       <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Days">
          <Input />
        </Form.Item>
        <Form.Item label="No of OT">
          <Input />
        </Form.Item>
        <Form.Item label="Salary">
          <Input />
        </Form.Item>
        <Form.Item label="OT">
          <Input />
        </Form.Item>
        <Form.Item label="Advance">
          <Input />
        </Form.Item>
        <Form.Item label="Remaining">
          <Input />
        </Form.Item> 
        <Form.Item label="Deduction">
          <Input />
        </Form.Item> 
        <Form.Item label="Total Pay">
          <Input />
        </Form.Item>
        <Form.Item label="Pay By">
          <Input />
        </Form.Item>

      </Form>
      <Button type="" className="editsalarybtn" onClick={() => props.onReceivechildProps(false, "close")}>
        {props.actionbtn}
        </Button>

    </div>
    )
  }
};

export default CustomermanagementView;

// const pannelobj = {
//   title: "Add New Entry ",
//   description: "",
//   // bgImage: "/assests/img/AddDocumentsIcon.svg",
// };
export const config = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging: true,
  isAdvance: false,
  isSearchbox: true,
  isAction: true,
  isAddNew: true,
  isActionleft: true,
  isTableAction: true
}