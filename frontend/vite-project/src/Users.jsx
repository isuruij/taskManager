import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { Box } from "@mui/material";
import Axios from "axios";
import { json } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tableKey, setTableKey] = useState(0); // New state for re-rendering UserTable
  const [isEdit, setisEdit] = useState(false);
  const [selectedUser, setselectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, [isSubmitted]); // useEffect will run when isSubmitted changes

  const getUsers = async () => {
    try {
      const response = await Axios.get(`http://16.170.241.48:3005/users`);
      setUsers(response.data);
      console.log("users are set");
      // Incrementing tableKey to force a re-render of UserTable
      setTableKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const addUsers = async (data) => {
    const payload = data;
    try {
      await Axios.post("http://16.170.241.48:3005/users", payload);
      setIsSubmitted(!isSubmitted);
      setisEdit(false);
    } catch (error) {
      console.log(error);
    }
  };


  const updateUser = async (data) => {
    const payload = data;
    try {
      await Axios.patch("http://16.170.241.48:3005/updateusers", payload);
      setIsSubmitted(!isSubmitted);
      setisEdit(false);
    } catch (error) {
      console.log(error);
    }

  };




  const deleteUser = async (data) => {
    
    try {
      
      console.log(data.id);
      await Axios.delete(`http://16.170.241.48:3005/deleteusers/${data.id}`);
      setIsSubmitted(!isSubmitted);
    } catch (error) {
      console.log(error); 
    }

  };

  return (
    <Box>

      <UserForm 
        addUsers={addUsers}
        isSubmitted={isSubmitted} 
        data={selectedUser} 
        isEdit={isEdit} 
        updateUser={updateUser}
        />
      {/* For this prop called key, you can give any name
      Through this prop called key we pass a unique key to UserTable component */}
      <UserTable 
        key={tableKey} 
        rows={users} 
        selectedUser={(data) => { 
          setselectedUser(data);
          setisEdit(true);
        }} 
        deleteUser={(data)=>{window.confirm("Are you sure?") && deleteUser(data)}}
      />
    </Box>
  );
};

export default Users;
