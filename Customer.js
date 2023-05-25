import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Customer=({customer,update})=>{

  //delete grocery
  const deleteCustomer=(custId)=>{
    axios.delete(`${base_url}/customers/${custId}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Customer deleted successfully");
        update(custId);
      })
       .catch((error)=>{
        console.error(error);
       // toast.error("Customer not deleted");
      });
    
  }
  //form handler function
  const handleForm=(e)=>{
    console.log(customer);
    postDatatoServer(customer);
    e.preventDefault();
}
//creating function to post data on server
const postDatatoServer=(data)=>{
axios.post(`${base_url}/customers`,data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Customer deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
    <CardSubtitle className="font-weight-bold">First Name: {customer.firstName}</CardSubtitle><br/>
          <CardSubtitle className="font-weight-bold">Last Name: {customer.lastName}</CardSubtitle><br/>
          <CardSubtitle className="font-weight-bold">Customer Email: {customer.custEmail}</CardSubtitle><br/>
          <CardSubtitle className="font-weight-bold">Gender: {customer.gender}</CardSubtitle><br/>
          <CardSubtitle className="font-weight-bold">Address: {customer.address}</CardSubtitle><br/>
          
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteCustomer(customer.custId);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-customer">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Customer;