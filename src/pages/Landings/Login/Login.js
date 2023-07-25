import {React, useState} from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { GoPersonFill } from "react-icons/go";
import { BiSolidLock } from "react-icons/bi";
import { Input  } from 'antd';
import { Checkbox } from 'antd';

function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
      <div className="loginbackground">
        <div>
          <h1>Welcome !</h1>
          
        </div>
        <img className="threecircles" src="/assests/threecircleslogin.svg"></img>
        <div>
          <section className="fieldssection">
            <img src="/assests/tdq.png" alt="tdqlogo"></img> <br></br>
            <img src="/assests/loginusericon.svg" alt="user"></img>
            <h2>Log In</h2>
            <form>
            <label for=""></label>
            <Input size="large" placeholder="Email Address" prefix={<GoPersonFill fontSize={"24px"}/>} />
            <br />
            <br />
           <Input.Password prefix={<BiSolidLock fontSize={"24px"}/>}
           size="large"
           placeholder="Password"
           visibilityToggle={{ 
           visible: passwordVisible,
           onVisibleChange: setPasswordVisible,
           }}
           />
            </form>
          </section>
           <section className="rememberforgotsec">
            <Checkbox onChange={onChange} style={{fontSize:"16px",color: "#9E9E9E"}}>Remember me</Checkbox>
            <a href="/verifyotp">Forgot password?</a>
            </section>
            <Button type="" className="logbtn" onClick={() => {navigate("/layout/landing")}}>Log In</Button>
        </div>
      </div>
  );
}

export default Login;