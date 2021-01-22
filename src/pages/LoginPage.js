import React, { useState } from 'react'
import {useHistory,Link} from "react-router-dom"
import {Input, Label,Button, Alert} from 'reactstrap'
import CustomNavbarwithloginandSignup from '../Components/CustomNavbarwithloginandSignup';
import routes from "../routes"
import "../Styles/forgetpassword.css"

export default function LoginPage() {
    const history=useHistory();
    const[message,setMessage]=useState('');
    const[alert,setAlert]=useState(false)
    const[email,setEmail]=useState('');
    const[password,setPass]=useState('');
    const handlePasswordChange=(e)=>{
        setPass(e.target.value)
    }
    const style={
        color:"blue"
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleLoginClick=async()=>{
        
        var bodydata={
            email,
            password
        }
        var res=await fetch("https://login-assignment-react.herokuapp.com/user/login",{
            method:"POST",
            body:JSON.stringify(bodydata),
            headers:{
                "Content-Type": "application/json"
            }
        })
        var data=await res.json();
        if(data.message==="Login Succesfull"){  
            localStorage.setItem("LoggedinUser",email)  
            localStorage.setItem("JWT",data.token)
            history.push(routes.dashboard)
        }else{
            setAlert(true)
            setMessage(data.message)
        }

    }



    return (
       <>
       <CustomNavbarwithloginandSignup></CustomNavbarwithloginandSignup>
       <div className="container">
           <h1 className="App">Login</h1>
           <Alert isOpen={alert} color="danger">{message}</Alert>   
       <div className="card mt-5 displaycard">
           <div className="card-body ">
           <Label for="name" >Email</Label>
            <Input type="text" value={email} onChange={handleEmailChange} id="name" />
            <Label for="password" >Password</Label>
            <Input type="password" value={password} onChange={handlePasswordChange} id="email" />
            <Link to={routes.forgetpassword} style={style}>Forgot password?</Link>
           </div>
          
      
       <div className="text-center mb-3">
       <Button  color="success" onClick={handleLoginClick}>Login</Button>
       </div>
       </div>
       </div>
       </>
    )
}
