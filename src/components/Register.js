import React,{useState} from 'react';
import './Register.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Register = () => {

    const [phoneNo,setPhoneNo] = useState("");
    const history = useHistory();
    
    const updatePhoneNo = (input) => {
        setPhoneNo(input);
    }

    const clearTextField = () => {
        setPhoneNo("");
    }

    const postData = () => {
        let path=`otp-verify`

        const data = {
            phoneNo: phoneNo,
            otp: "123456"
        }

        axios.post("https://fastor-748cb-default-rtdb.firebaseio.com/Register.json",data)
            .then(response => {
                console.log(response)
        });

        history.push(path);
    } 

    return(
        <>
            <div className="form">
                <h1 className="register">Register</h1>
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    value={phoneNo}
                    onChange={(e) => updatePhoneNo(e.target.value)}
                />
                <div className="btn">
                    <input 
                        type="button" 
                        className="clear" 
                        value="clear"
                        onClick={() => clearTextField()} 
                    />
                    <input type="submit" className="submit" value="Verify" onClick={() => postData() } />
                </div>
            </div>
        </>
    );
}

export default Register;