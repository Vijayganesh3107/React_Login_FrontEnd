import { faRss } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import routes from '../routes';

export default function SignupAuthPage() {
    const[data,setData]=useState({})
    const[message,setMessage]=useState('')
    const[loading,setLoading]=useState(false)
    const history=useHistory();
    var email=localStorage.getItem("EmailToBeValidated")

    useEffect(()=>{
        setLoading(true)
         fetch(`https://login-assignment-react.herokuapp.com/user/auth/${email}`,{
             method:"PUT",
             headers:{
                 "Content-Type":"application/json"
             }
         }).then(res=>res.json()).then(dat=>{
             setLoading(false)
             setMessage(dat.message)
            setData(dat)
            if(dat.message==="User Successfully Activated")
            history.push(routes.login)
            else{
                history.push(routes.home)
            }
        })
        


    },[])
   
    return (
        <div>
            <h1 className="App">Auth Page</h1>
            <h3>{message}</h3>
             <Spinner animation="border" className="App" variant="primary" aria-disabled={loading} /> 
           
        </div>
    )
}
