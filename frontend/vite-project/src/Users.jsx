import React from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { Box } from "@mui/material";

const users = [
  {
    id: 1,
    name: "prasad",
  },
  {
    id: 2,
    name: "srimal",
  },
  {
    id: 3,
    name: "srimal",
  },
  { id: 4, name: "prasad" },
  {
    id: 5,
    name: "srimal",
  },
  {
    id: 6,
    name: "srimal",
  },
];

const Users = () => {
  return (
    <Box>
      <UserForm />
      {/* For this prop called rows, you can give any name */}
      <UserTable rows={users} />
    </Box>
  );
};

export default Users;
