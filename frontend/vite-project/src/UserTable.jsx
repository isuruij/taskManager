import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const UserTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "500px", borderRadius: "10px" }}
    >
      <h5>{rows.length} Tasks</h5>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Discription</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.discription}
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px -10px" }}
                    onClick={() => {
                      selectedUser({
                        id: row.id,
                        time: row.time,
                        discription: row.discription,
                      });
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    onClick={() => {
                      deleteUser({ id: row.id });
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell component="td">No data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
