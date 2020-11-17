import React from 'react'
import {Input,Label,Row,Col,FormGroup,Form,Table, Button, Spinner,Card,CardBody,UncontrolledCollapse, BreadcrumbItem} from 'reactstrap'
import { useState, useEffect } from 'react'
import CustomNavbarwithLogout from "../Components/CustomNavbarWithLogout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen,faPhoneSquareAlt,faMapMarker,faUser} from '@fortawesome/free-solid-svg-icons'
import "../Styles/dashboardstyle.css"
import { Redirect } from 'react-router-dom'


export default function Dashboard() {
const [message,setMessage]=useState('');
    const[url,setUrl]=useState('');
    const[data,setData]=useState([]);
    const user= localStorage.getItem("LoggedinUser");
    
    const handleUrlChange=(e)=>{
        setUrl(e.target.value)
    }
    const handleShrinkClick= async()=>{
      
      var bodydata={longURL:url}
      var req=await fetch(`https://login-assignment-react.herokuapp.com/insertUrl/${user}`,{
        method:"POST",
        body:JSON.stringify(bodydata),
        headers:{
          "Content-Type": "application/json"
        }
      })
      var resdata=await req.json();
    if(resdata){
       fetch(`https://login-assignment-react.herokuapp.com/getUrl/${user}`).then(req=>req.json()).then(data=>{
         setData(data)
        }) 
       
       setMessage(resdata.message)
    }
    
    }
    

    useEffect(()=>{
      
      fetch(`https://login-assignment-react.herokuapp.com/getUrl/${user}`).then(res=>res.json()).then(data=>{setData(data)})
    },[data.shortURL])
    
   
    return (
        <>
       <CustomNavbarwithLogout></CustomNavbarwithLogout>
        <div className="container">
          <Row>
            <Col xl={8}>
              <h1 className="text-right">DashBoard!!!</h1>
            </Col>
            <Col className="text-right" xl={4}>
            <Button color="" id="toggler" style={{ marginBottom: '1rem',borderRadius:'50%' }}>
            <FontAwesomeIcon icon={faUser}/>
            </Button>
            <UncontrolledCollapse toggler="#toggler">
      <Card className="displaycard">
        <CardBody className="text-center">
          <Row>
            <Col xl={3} className="text-right">User:</Col>
            <Col xl={9} className="text-left">{user}</Col>
          </Row>
        
        </CardBody>
      </Card>
    </UncontrolledCollapse>
            </Col>
        </Row>
        <Row className="mb-5 mt-5">
        <Col xl={6} className="text-right">
        <label for="exampleEmail">URL:</label>
        </Col>
        <Col xl={4}>
        <input type="email" name="email" id="exampleEmail" value={url} onChange={handleUrlChange} placeholder="Enter the URL here...." />
        <Button color="primary" className="ml-5" onClick={handleShrinkClick}>Shrink URL</Button>
        </Col>
        </Row>
        <Row>    
        <h1 className="text-center">{message}</h1>
        <Table striped>
      <thead>
        <tr>
          <th>URL</th>
          <th>Short URL</th>
        </tr>
      </thead>
      <tbody>
    {data.map((url,index)=>{
        return(
          <tr key={index}>
            <td>
            {url.longURL}
            </td>
            <td>
            <a href={url.longURL}>{url.shortURL}</a>
            </td>
          </tr>
        )
      })}
        
        </tbody>
        </Table>

        </Row>
      
      </div>
    </>
    )
}
