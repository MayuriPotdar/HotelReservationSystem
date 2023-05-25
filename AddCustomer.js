import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddCustomer=()=>{
    useEffect(()=>{
        document.title="ADD Customer || Reserve Room For Customer";
    },[]);

    const [customer,setcustomer]=useState({});

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
            toast.success("Customer added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};

    return (
        <Fragment>
        <h1 className="text-center my-3">Fill Customer Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="id">Customer Id</label>
                <Input
                        Type="text"
                        placeholder="Enter Customer ID here"
                        name="id"
                        Id="id"
                        onChange={(e)=>{
                            setcustomer({...customer,custId:e.target.value});
                        }}
                />
            </FormGroup>
               
            <FormGroup>
                <label for="firstName">First Name</label>
                <Input
                        Type="text"
                        placeholder="Enter First Name "
                        name="firstName"
                        Id="firstName"
                        onChange={(e)=>{
                            setcustomer({...customer,firstName:e.target.value});
                        }}
                />
                </FormGroup>
                
                <FormGroup>
                <label for="lastName">Last Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Last Name "
                        name="lastName"
                        Id="lastName"
                        onChange={(e)=>{
                            setcustomer({...customer,lastName:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="gender">Gender</label>
                <Input
                        Type="text"
                        placeholder="Enter Gender Of Customer"
                        name="gender"
                        Id="gender"
                        onChange={(e)=>{
                            setcustomer({...customer,gender:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="address">Address</label>
                <Input
                        Type="text"
                        placeholder="Enter Address Of Customer"
                        name="address"
                        Id="address"
                        onChange={(e)=>{
                            setcustomer({...customer,address:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="custEmail">Email Address</label>
                <Input
                        Type="text"
                        placeholder="Enter Email Address Of Customer"
                        name="custEmail"
                        Id="custEmail"
                        onChange={(e)=>{
                            setcustomer({...customer,custEmail:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="contactNo">Customer Contactno</label>
                <Input
                        Type="text"
                        placeholder="Enter Contactno Of Customer"
                        name="contactNo"
                        Id="contactNo"
                        onChange={(e)=>{
                            setcustomer({...customer,contactNo:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="reservationDate">Customer Reservation Date</label>
                <Input
                        Type="Date"
                        placeholder="Enter ReservationDate Of Customer"
                        name="reservationDate"
                        Id="reservationDate"
                        onChange={(e)=>{
                            setcustomer({...customer,reservationDate:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="checkoutDate">Room Checkout Date</label>
                <Input
                        Type="Date"
                        placeholder="Enter CheckoutDate Of Customer"
                        name="checkoutDate"
                        Id="checkoutDate"
                        onChange={(e)=>{
                            setcustomer({...customer,checkoutDate:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="noofPerson">No Of person Staying in room</label>
                <Input
                        Type="text"
                        placeholder="No Of person Staying in room"
                        name="noofPerson"
                        Id="noofPerson"
                        onChange={(e)=>{
                            setcustomer({...customer,noofPerson:e.target.value});
                        }}
                />
                </FormGroup>
                <FormGroup>
                <label for="reserveRoomNo">Assigned Room No Of Customer</label>
                <Input
                        Type="text"
                        placeholder="Enter Room No here"
                        name="reserveRoomNo"
                        Id="reserveRoomNo"
                        onChange={(e)=>{
                            setcustomer({...customer,reserveRoomNo:e.target.value});
                        }}
                />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Customer</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddCustomer;