import React, { useEffect, useState } from "react";
import { Button, Grid, Input, Typography } from "@mui/material";

const UserForm = ({ addUsers, isSubmitted, data, isEdit, updateUser }) => {
  const [id, setid] = useState(0);
  const [time, settime] = useState("");
  const [discription, setdiscription] = useState("");

  useEffect(() => {
    settime("");
    setid("");
    setdiscription("");
  }, [isSubmitted]);

  useEffect(() => {
    if (data && data.id && data.id != 0) {
      setid(data.id);
      settime(data.time);
      setdiscription(data.discription);
    }
  }, [data]);

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
          marginBottom: "30px",
          display: "block",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component={"h1"}
            sx={{ color: "#000000", marginLeft: "-50px" }}
          >
            Add Task
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            sx={{ width: "400px" }}
            value={id}
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="date"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            Time
          </Typography>
          <Input
            type="time"
            id="time"
            name="time"
            sx={{ width: "400px" }}
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            Discription
          </Typography>
          <Input
            type="text"
            id="Discription"
            name="Discription"
            sx={{ width: "400px" }}
            value={discription}
            onChange={(e) => {
              setdiscription(e.target.value);
            }}
          />
        </Grid>

        <Button
          sx={{
            margin: "auto",
            marginBottom: "20px",
            backgroundColor: "#00c6e6",
            color: "#000000",
            marginLeft: "-20px",
            marginTop: "20px",
            "&:hover": {
              backgroundColor: "#00c6e6",
              opacity: 0.7,
            },
          }}
          onClick={() => {
            isEdit
              ? updateUser({ id: id, time: time, discription: discription })
              : addUsers({ id: id, time: time, discription: discription });
          }}
        >
          {isEdit ? "update" : "Add"}
        </Button>
      </Grid>
    </div>
  );
};

export default UserForm;
