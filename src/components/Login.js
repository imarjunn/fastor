import React,{useState,useEffect, useCallback} from 'react';
import axios from 'axios';
import './Login.css';
import { useHistory } from "react-router-dom";

const Login = () => {

    const [typedOtp,setTypedotp] = useState("");
    const [userName,setUserName] = useState("");
    const [otp,setOtp] = useState("");
    const [toggle,setToggle] = useState(false);

    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            const users = axios.get('https://fastor-748cb-default-rtdb.firebaseio.com/Register.json')
                .then(res => {
                    //setDataS(Object.entries(res.data));
                    //console.log(res.data[Object.keys(res.data)[0].otp]);
                    setUserName(Object.entries(res.data[Object.keys(res.data)[Object.keys(res.data).length - 1]])[1][1]);
                    setOtp(Object.entries(res.data[Object.keys(res.data)[0]])[0][1]);
                });
        },1000);
    },[]);

    const updateOTP = (input) => {
        setTypedotp(input);
    }

    const checkOtp = (input) => {
        let path="rest-listing";

        if(otp === input){
            history.push(path);
        }else{
            setToggle(true);
            setTypedotp("");
        }
    }

    return(
        <>
            <div className="form">
                <h1 className="register">Hey, <span className="user" >{userName}?</span></h1>
                <input 
                    type="text" 
                    placeholder="Verify OTP"
                    value={typedOtp}
                    onChange={(e) => updateOTP(e.target.value)}
                />
                <input type="submit" className="verify" value="Verify" onClick={() => checkOtp(typedOtp)} />
                {toggle ? <div className="otpNotification">OTP not same,please check</div> : null}
            </div>
        </>
    );
}

export default Login;