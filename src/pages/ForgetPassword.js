import React, { useState } from 'react'
import { Label,Button,Input,Alert } from 'reactstrap';
import "../Styles/forgetpassword.css"

export default function ForgetPassword() {
    const[email,setEmail]=useState('');
    const[alertopen,setAlertOpen]=useState(false);
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmitClick=async()=>{
        localStorage.setItem("EmailForPasswordChange",email);
        var bodydata={
            email
        }
        var res=await fetch("https://login-assignment-react.herokuapp.com/forgetpassword",{
            method:"POST",
            body:JSON.stringify(bodydata),
            headers:{
                "Content-Type": "application/json"
            }
        });
        var data=await res.json();
        if(data.message=="Email Sent"){
            setAlertOpen(true);
        }else{
            alert(data.message)
        }
    }

    return (
        <>
         <Alert color="success" isOpen={alertopen}>Reset Password link Has been sent to Registered mail ID</Alert>
        <h1 className="App">Forget Password</h1>
        <div className="card mt-5 ">
            <div className="card-body displaycard">
            <Label for="email">Email:</Label>
            <Input id="email" value={email} onChange={handleEmailChange}/>
                <div className="text-center">
                    <Button color="success" onClick={handleSubmitClick}>Submit</Button>
                </div>
            </div>
        </div>
       
        </>
    )
}
