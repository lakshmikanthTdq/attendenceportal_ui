import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import './CustomerManagementview.css'
import RightsidePannel from '../RightsidePannel/RightsidePannel'

const CustomermanagementView = () => {
const [isRightsidePannel, setIsRightsidePannel] = useState(true);

const onReceivePropsHandler = (pannel, load) => {
    if (load === "getFetch") {
        setIsRightsidePannel(pannel);
    } else if (load === "close") {
        setIsRightsidePannel(pannel);
    }
}


  return (
    <div>
        <div
        className="adddocumentsection"
        style={{ display: "flex", height: "34px", gap: "10px" }}
        onClick={() => setIsRightsidePannel(true)}
      >
         <IoAddCircle  className='addicon'/>
        <h4 className="addnewdocumenttext">Add Bussiness</h4>

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
  )
}

const ComponentRenderData = (props) => {
   
  
    return (
      <>
        <img src="/assests/useraddicon.svg" alt="" />
       <h4 className='useraddicontxt'>The word ‘lorem’ for example, isn’t a real Latin word,</h4>
      
      </>
    );
  };

export default CustomermanagementView


const pannelobj = {
    title: "Add Business ",
    description: "",
    // bgImage: "/assests/img/AddDocumentsIcon.svg",
  };







