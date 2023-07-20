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
          <div>
           <section className="otpfield">
            <h6>verification code sent to</h6> <h5>techdoquest@gmail.com</h5>
            
              <OtpInput className="otpboxes"
                value={otp}
                onChange={setOTP}
                numInputs={4}
                inputStyle={{ width: 42, height: 52, margin: 6, fontSize: 20, boxShadow: "0px 3px 6px #00000029", border: "1px solid #E5E5E5", borderRadius: "10px", }}
                // renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            
            <div className="resendotpsec"> <p>didn’t receive? </p> <a href=""> Resend otp</a> </div>
            
            <Button type="" className="otpsubmitbtn" onClick={() => {navigate("/forgotpassword")}}>Submit</Button>
            </section>
          </div>
      </div>
  );
}

export default VerifyOTP;