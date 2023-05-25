import React, { useState,useEffect } from "react";
import RoomType from "./RoomType";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllRoomType =() => {

    useEffect(() => {
            document.title="All Roooms || Records Of All Rooms";
    });

    //Function to call servers
    const getAllRoomTypeFromServer = () => {
        axios.get(`${base_url}/rooms`).then(
            (response) => {
                //For Success
                // console.log("Success");
                console.log(response.data);
                toast.success("Rooms has been loaded",{position:"bottom-center"});
                setroomtypes(response.data);
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
        getAllRoomTypeFromServer();
        },[]);

    const [roomtypes,setroomtypes]=useState([]);

    const UpdateRoomType=(roomNo)=>{
        setroomtypes(roomtypes.filter((c)=>c.roomNo!=roomNo));
    };

    
    return(
        <div>
            <h2>All Rooms</h2>
            <p>list of Rooms as follows</p>
           {roomtypes.length > 0 
            ? roomtypes.map((item) => <RoomType key={item.roomNo} roomtype={item}/>) 
            :"No Rooms"};
       </div>

    );
};

export default AllRoomType;