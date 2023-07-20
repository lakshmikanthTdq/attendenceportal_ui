import {React, useState} from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { BiSolidLock } from "react-icons/bi";
import { Input  } from 'antd';

function ForgotPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();


  return (
      <div className="loginbackground">
        <div>
          <h1>Welcome !</h1>
        </div>
        <div>
          <section className="fieldssection">
            <img src="/assests/loginusericon.svg"></img>
            <h2>Forgot Password</h2>
            <form>
            <Input.Password prefix={<BiSolidLock fontSize={"24px"}/>}
           size="large"
           placeholder="New Password"
           visibilityToggle={{ 
           visible: passwordVisible,
           onVisibleChange: setPasswordVisible,
           }}
           />
            <br />
            <br />
           <Input.Password prefix={<BiSolidLock fontSize={"24px"}/>}
           size="large"
           placeholder="Confirm New Password"
           visibilityToggle={{ 
           visible: passwordVisible,
           onVisibleChange: setPasswordVisible,
           }}
           />
            </form>
          </section>
           
            <Button type="" className="logbtn" onClick={() => {navigate("/layout/landing")}}>Submit</Button>
        </div>
      </div>
  );
}

export default ForgotPassword;