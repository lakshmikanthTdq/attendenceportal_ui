import { React, useState } from "react";
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { GoPersonFill } from "react-icons/go";
import { BiSolidLock } from "react-icons/bi";
import { Checkbox } from 'antd';

function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      navigate("/layout/landing");
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <div className="loginbackground">
      <aside>n
        <h1>Welcome !</h1>
      </aside>
      <img className="threecircles" src="/assests/threecircleslogin.svg"></img>
      <aside>
        <section className="fieldssection">
          <img src="/assests/tdq.png"></img> <br></br>
          <img src="/assests/loginusericon.svg"></img>
          <h2>Log In</h2>

          <Form form={form} name="dynamic_rule">
            <Form.Item
              name="email"
              // label="Email"
              style={{marginBottom: "37px"}}
              rules={[
                {
                  required: true,
                  message: 'Please enter email address',
                },
              ]}
            >
              <Input size="large" placeholder="Email Address" prefix={<GoPersonFill fontSize={"24px"} />} />
            </Form.Item>
            <Form.Item
              name="password"
              // label="Password"
              style={{marginBottom: "37px"}}
              rules={[
                {
                  required: true,
                  message: 'Please enter password',
                },
              ]}
            >
              <Input.Password prefix={<BiSolidLock fontSize={"24px"} />}
                size="large"
                placeholder="Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Form.Item>
              <div className="rememberforgotsec">
                <Checkbox onChange={onChange} style={{ fontSize: "16px", color: "#9E9E9E" }}>Remember me</Checkbox>
                <a href="/verifyotp">Forgot password?</a>
              </div>
            <Form.Item >
              <Button type="" className="logbtn" onClick={() => { onSubmit() }}>Log In</Button>
            </Form.Item>
          </Form>
        </section>
      </aside>
    </div>
  );
}

export default Login;