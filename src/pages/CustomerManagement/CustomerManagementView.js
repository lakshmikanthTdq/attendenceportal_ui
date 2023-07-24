import React, { useState, useEffect } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { Input } from 'antd';
import { Select, Space } from 'antd';
import { Button } from 'antd';
import './CustomerManagementview.css'
import RightsidePannel from '../RightsidePannel/RightsidePannel';
import { DynamicTable } from '../../components/DynamicTable/DynamicTable';
import { customerManagementcolumns, customerManagementData } from '../../_localdata/customermanagementdata';

export function CustomermanagementView(){

  // variable declarations 
  const [isRightsidePannel, setIsRightsidePannel] = useState(false);
  const [ tableData, setTableData ] = useState([]);

  // events start here 
  const onReceivePropsHandler = (pannel, load) => {
    if (load === "getFetch") {
      setIsRightsidePannel(pannel);
    } else if (load === "close") {
      setIsRightsidePannel(pannel);
    }
  }

  const onChangeTableHandler = (type, object) => {
    if(type === "edit"){
      console.log("edit", object);
      setIsRightsidePannel(true);
    }
    else if(type === "delete"){
      console.log("delete", object)
      
    }
    else if(type === "advance"){
      console.log("advance", object)
      setIsRightsidePannel(true);
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
  
  // rendering
  return (
    <div>
      <div>
      <Space size="small">
        <div className='customermanagementicon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.223" height="17.573" viewBox="0 0 17.223 17.573">
            <path id="customer-service" d="M23.006,24.321a6.453,6.453,0,0,0,.608,2.277l-1.192.688a7.826,7.826,0,0,1-.792-2.965h1.375Zm6.81-5.442A1.826,1.826,0,1,1,27.99,20.7,1.826,1.826,0,0,1,29.816,18.879Zm-3.2,7.241h6.406a.328.328,0,0,0,.322-.4,3.612,3.612,0,0,0-7.049,0A.328.328,0,0,0,26.613,26.119Zm2.67,3.291a.529.529,0,0,0,.656-.38.557.557,0,0,0-.381-.662,15.362,15.362,0,0,1-2.422-.718,1.927,1.927,0,0,0-2.18.121l-1.721,1,1.429,2.525.113-.065A.291.291,0,0,1,25,31.2l3.88,1.039a1.52,1.52,0,0,0,1.38-.2l5.328-3.281a.6.6,0,0,0,.223-.571.547.547,0,0,0-.287-.45c-.277-.14-.758-.1-1.5.335l-2.947,1.717a2.153,2.153,0,0,1-.733.268,6.714,6.714,0,0,1-2.486-.409c-.21-.06-.424-.121-.632-.177a.292.292,0,0,1,.151-.565c.636.17,1.267.375,1.911.509Zm-6.935-1.022L24.677,32.5a.417.417,0,0,1-.157.567l-.792.448a.417.417,0,0,1-.567-.157l-2.329-4.116a.417.417,0,0,1,.157-.567l.792-.448A.417.417,0,0,1,22.348,28.389Zm-.534.617a.283.283,0,1,0,.321.239A.283.283,0,0,0,21.814,29.005Zm-.184-5.7a7.794,7.794,0,0,1,.794-2.964l1.2.692a6.644,6.644,0,0,0-.612,2.272Zm1.3-3.839A7.875,7.875,0,0,1,25.1,17.3l.685,1.187a6.427,6.427,0,0,0-1.659,1.674Zm3.044-2.677A7.782,7.782,0,0,1,28.939,16v1.375a6.408,6.408,0,0,0-2.28.605ZM29.95,16v1.375a6.464,6.464,0,0,1,5.906,7.243H35.4a.158.158,0,0,0-.124.256l1.22,1.549a.158.158,0,0,0,.248,0l1.22-1.549a.158.158,0,0,0-.124-.256h-.606a7.921,7.921,0,0,0,.041-.8A7.832,7.832,0,0,0,29.95,16Z" transform="translate(-20.779 -16)" fill="#1a2b6d" fill-rule="evenodd" />
          </svg>
        </div>
        <p id='customermanagementtext'>CUSTOMER MANAGEMENT</p>
      </Space>
      </div>

      <div className='addbussiness'
        onClick={() => setIsRightsidePannel(true)}
      >
        <IoAddCircle className='addicon' />
        <h4 className="addbusinesstext">Add Bussiness</h4>
      </div>

      <DynamicTable
        config={config}
        columns={customerManagementcolumns}
        data={customerManagementData}
        filterby={"Search by Business Name"}
        events={eventhandlers}
      />

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
      {/* <img src="/assests/useraddicon.svg" alt="" /> */}
      <div>
      <svg id="_x32_9_Change_Picture" xmlns="http://www.w3.org/2000/svg" width="72" height="75.316" viewBox="0 0 72 75.316">
  <g id="Group_5230" data-name="Group 5230" transform="translate(0 0)">
    <path id="Path_16456" data-name="Path 16456" d="M31.888,31.776A7.888,7.888,0,1,0,24,23.888,7.9,7.9,0,0,0,31.888,31.776Z" transform="translate(3.045 2.03)" fill="#a8a8a8"/>
    <path id="Path_16457" data-name="Path 16457" d="M38.157,32H26.888A7.9,7.9,0,0,0,19,39.888v2.254a3.385,3.385,0,0,0,3.381,3.381H42.664a3.385,3.385,0,0,0,3.381-3.381V39.888A7.9,7.9,0,0,0,38.157,32Z" transform="translate(2.41 4.06)" fill="#a8a8a8"/>
    <path id="Path_16459" data-name="Path 16459" d="M5.634,34.933A29.3,29.3,0,1,1,60.27,49.582H63.1a4.981,4.981,0,0,1,3,1.063A34.928,34.928,0,1,0,47.328,67.584V61.459A29.262,29.262,0,0,1,5.634,34.933Z" transform="translate(0 0)" fill="#a8a8a8"/>
    <path id="Path_16460" data-name="Path 16460" d="M52.981,52.075a5.219,5.219,0,0,1,3.693-3.248A27.134,27.134,0,1,0,46.44,58.058v-.349a5.641,5.641,0,0,1,5.634-5.634Zm-3.16-6.761a5.641,5.641,0,0,1-5.634,5.634H23.9a5.641,5.641,0,0,1-5.634-5.634V43.06A10.148,10.148,0,0,1,27.73,32.952a10.142,10.142,0,1,1,12.63,0A10.148,10.148,0,0,1,49.821,43.06Z" transform="translate(0.888 0.888)" fill="none"/>
    <circle id="Ellipse_178" data-name="Ellipse 178" cx="14" cy="14" r="14" transform="translate(44 47.316)" fill="#a8a8a8"/>
    <g id="Group_5509" data-name="Group 5509" transform="translate(51.768 55.614)">
      <rect id="Rectangle_2932" data-name="Rectangle 2932" width="3.045" height="12.79" rx="1.523" transform="translate(5.039 0)" fill="#fff"/>
      <rect id="Rectangle_2933" data-name="Rectangle 2933" width="2.436" height="13.401" rx="1.218" transform="translate(13.401 5.152) rotate(90)" fill="#fff"/>
    </g>
  </g>
</svg>
      </div>
      <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
      <Input placeholder="Name" style={{ height: "50px" }} />
      <Input placeholder="Street Address" style={{ height: "50px", marginTop: "30px" }} />
      < Space size="large" >
        <Select
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
        <Select
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
        <Input placeholder="Contact Person Details" style={{ height: "50px", marginTop: "40px", width: 250 }} />

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

export const config = {
  isCheckbox: false,
  isSorting: true,
  isPagination: true,
  isPaging:true,
  isAdvance: false,
}