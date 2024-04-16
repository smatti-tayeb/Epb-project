import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link,useNavigate} from "react-router-dom"
import "./error.css"


 const Error = () => {
  const navigate = useNavigate();

const goHome =()=>{
  navigate("/");
};
  return <>
  {/* <div>
    <h6>
      error</h6></div> */}
      <div className='error-container'>
     <Card style={{ width: '18rem' }}>
       <Card.Body>
         <Card.Title>wrong Page</Card.Title>
         <Card.Text>
          Click to return Home
         </Card.Text>
         <Button type="button" variant='primary' onClick={goHome} >Go Home</Button>
       </Card.Body>
     </Card>
     </div>
    </>
  
}
export default Error;
