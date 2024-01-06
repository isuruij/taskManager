import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { Box } from "@mui/material";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tableKey, setTableKey] = useState(0); // New state for re-rendering UserTable

  useEffect(() => {
    getUsers();
  }, [isSubmitted]); // useEffect will run when isSubmitted changes

  const getUsers = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/users");
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
      await Axios.post("http://localhost:3001/users", payload);
      setIsSubmitted(!isSubmitted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <UserForm addUsers={addUsers} isSubmitted={isSubmitted} />
      {/* For this prop called key, you can give any name
      Through this prop called key we pass a unique key to UserTable component */}
      <UserTable key={tableKey} rows={users} />
    </Box>
  );
};

export default Users;
