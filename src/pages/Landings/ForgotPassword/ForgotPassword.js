import {React, useState} from "react";
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { BiSolidLock } from "react-icons/bi";

function ForgotPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      navigate("/login");
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
      <div className="loginbackground">
        <aside>
          <h1>Welcome !</h1>
        </aside>
        <img className="threecircles" src="/assests/threecircleslogin.svg"></img>
        <aside>
          <section className="fieldssection">
          <img src="/assests/tdq.png" alt="tdqlogo"></img> <br></br>
            <img src="/assests/loginusericon.svg" alt="user"></img>
            <h2>Forgot Password</h2>
            <Form form={form} name="dynamic_rule">
            <Form.Item
              name="new password"
              // label="Password"
              style={{marginBottom: "24px"}}
              rules={[
                {
                  required: true,
                  message: 'Please enter new password',
                },
              ]}
            >
            <Input.Password prefix={<BiSolidLock fontSize={"24px"}/>}
           size="large"
           placeholder="New Password"
           visibilityToggle={{ 
           visible: passwordVisible,
           onVisibleChange: setPasswordVisible,
           }}
           />
           </Form.Item>
            {/* <br />
            <br /> */}
            <Form.Item
              name="confirm new password"
              // label="Password"
              style={{marginBottom: "24px"}}
              rules={[
                {
                  required: true,
                  message: 'Please confirm new password',
                },
              ]}
            >
           <Input.Password prefix={<BiSolidLock fontSize={"24px"}/>}
           size="large"
           placeholder="Confirm New Password"
           visibilityToggle={{ 
           visible: confirmpasswordVisible,
           onVisibleChange: setConfirmPasswordVisible,
           }}
           />
           </Form.Item>
            </Form>
          </section>
           
            <Button type="" className="logbtn" onClick={() => { onSubmit() }}>Submit</Button>
             
        </aside>
      </div>
  );
}

export default ForgotPassword;