import {React, useState} from "react";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './VerifyOTP.css';
import OtpInput from 'react-otp-input';

function VerifyOTP() {

  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  return (
    <div className="verifyotpbackground">
        <div>
          <h1>Welcome !</h1>
        </div>
          <div className="otpfield">
           <section >
            <h5>verification code sent to</h5> <h4>techdoquest@gmail.com</h4>
            <div className="otpboxes"> 
              <OtpInput 
                value={otp}
                onChange={setOTP}
                numInputs={4}
                inputStyle={{ width: 70, height: 70, margin: 8, fontSize: 20, boxShadow: "0px 3px 6px #00000029", border: "1px solid #E5E5E5", borderRadius: "10px" }}
                // renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="resendotpsec"> <p>didn’t receive? </p> <a href=""> Resend otp</a> </div>
            
            <Button type="" className="otpsubmitbtn" onClick={() => {navigate("/forgotpassword")}}>Submit</Button>
            </section>
          </div>
      </div>
  );
}

export default VerifyOTP;