import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import {Input, Label,Button,Alert} from 'reactstrap'
import CustomNavbarwithloginandSignup from '../Components/CustomNavbarwithloginandSignup';
import routes from "../routes"
import "../Styles/forgetpassword.css"


export default function SignupPage() {
    const history=useHistory();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPass]=useState('');
    const[repass,setRepass]=useState('');
    const[alertopen,setAlertOpen]=useState(false);

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassChange=(e)=>{
        setPass(e.target.value)
    }

    const handleRePassChange=(e)=>{
        setRepass(e.target.value)

    }
    const handleSignupClick=async()=>{
        if(password!==repass){
            alert("Passwords must match")
        }else{
            if((password==="")||(repass==="")){
                alert("Password cannot be empty")
            }else{
               var bodydata={
                   name,
                   email,
                   password,
                   
               }
               var res=await fetch("https://login-assignment-react.herokuapp.com/user/signup",{
                   method:"POST",
                   body:JSON.stringify(bodydata),
                   headers:{
                    "Content-Type": "application/json"
                   }
               })
               var data=await res.json();
               if(data.message==="Data Inserted Successfully"){
                   localStorage.setItem("EmailToBeValidated",data.email)
                   setAlertOpen(true);
                   
                //    history.push(routes.login)
               }
               else{
                   alert(data.message)
               }
            }
        }


      
    }

    return (
        <>
        <CustomNavbarwithloginandSignup></CustomNavbarwithloginandSignup>
        <h1 className="App mt-3">Signup</h1>
        <div className="container card mt-5 displaycard">
            <div className="mt-3 ">
            <Label for="name" >Name</Label>
            <Input type="text" value={name} onChange={handleNameChange} id="name" />
            <Label for="email" >Email</Label>
            <Input type="email" value={email} onChange={handleEmailChange} id="email" />
            <Label for="password" >Passowrd</Label>
            <Input type="password" value={password} onChange={handlePassChange} id="password" />
            <Label for="retypepass" >Re-Type Password</Label>
            <Input type="password" value={repass} onChange={handleRePassChange} id="retypepass" />
            </div>
            <div className="justify-content-center text-center mt-5">
                <Button color="success mb-3" onClick={handleSignupClick}>Signup</Button>
            </div>
            <Alert color="success" isOpen={alertopen}>Mail Has been sent to Registered mail ID</Alert>
        </div>
        </>
    )
}
