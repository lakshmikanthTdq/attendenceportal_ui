import React from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      {/* <Button type="primary" onClick={() => {navigate("/layout/landing")}}>Goto Main</Button> */}
      <Button type="primary" onClick={() => {navigate("/layout/customermanagement/view")}}>Goto Main</Button>
    </>
  );
}

export default Login;