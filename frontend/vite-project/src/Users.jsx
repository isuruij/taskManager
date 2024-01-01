import React, { useEffect } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { Box } from "@mui/material";
import Axios from "axios"
import { useState } from "react";



const Users = () => {

  const [users, setusers] = useState([]);
  const [submitted, setsubmitted] = useState(false);

  useEffect(()=>{
    getUsers();
  },[]);



  const getUsers = async ()=>{
      try{
        const response = await Axios.get("http://localhost:3001/users");
        console.log(response.data);
        setusers(response.data);
      }catch(error){
          console.log(error)
      } 

  }


  const addUsers = async (data)=>{
    setsubmitted(true);
    const payload = data;
    try{
      Axios.post("http://localhost:3001/users",payload);
      console.log(payload);
      setsubmitted(false);
      getUsers();
      setusers(response.data);
    }catch(error){
        console.log(error)
    }
  }

  return (
    <Box>
      <UserForm  addUsers={addUsers} submitted={submitted} />
      {/* For this prop called rows, you can give any name */}
      <UserTable rows={users} />
    </Box>
  );
};

export default Users;
