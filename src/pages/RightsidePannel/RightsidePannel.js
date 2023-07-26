import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import './RightsidePannel.css'


const RightsidePannel = (props) => {
  const { componentLayout } = props

  useEffect(() => {
    if (props.onReceivechildProps !== undefined) {
      console.log(props.onReceivechildProps);
    }
  }, [props.onReceivechildProps])

  return (
    <>
      <section className="sidebarBg">
        <div className='sidebar'>
          <div className='headertext'>
            <p className={componentLayout.pageName === "vendorportal" ? "heading1" : ""}>{componentLayout}</p>
            <IoMdClose className='closeicon' onClick={() => props.onReceiveProps(false, "close")}  />
          </div>

          <div className="contentSection">
            <article>
              {props.componentData}
            </article>
          </div>

          <footer>
            <div className={componentLayout.pageName === "vendorportal" ? "bottomBox" : ""} />
            <img src={componentLayout.bgImage} alt={componentLayout.bgImage} />
          </footer>
        </div>
      </section>
    </>
  )
}

export default RightsidePannel;