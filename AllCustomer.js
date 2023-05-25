import React, { useState,useEffect } from "react";
import Customer from "./Customer";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCustomer =() => {

    useEffect(() => {
            document.title="All Customers || Records Of All Customers";
    });

    //Function to call servers
    const getAllCustomersFromServer = () => {
        axios.get(`${base_url}/customers`).then(
            (response) => {
                //For Success
                // console.log("Success");
                console.log(response.data);
                toast.success("Customer has been loaded",{position:"bottom-center"});
                setcustomers(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllCustomersFromServer();
        },[]);

    const [customers,setcustomers]=useState([]);

    const UpdateCustomer=(custId)=>{
        setcustomers(customers.filter((c)=>c.custId!=custId));
    };

    
    return(
        <div>
            <h2>All Customers</h2>
            <p>list of customers as follows</p>
           {customers.length > 0 
            ? customers.map((item) => <Customer key={item.custId} customer={item}/>) 
            :"No Customers"};
       </div>

    );
};

export default AllCustomer;