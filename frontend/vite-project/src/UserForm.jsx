import React, { useEffect, useState } from "react";
import { Button, Grid, Input, Typography } from "@mui/material";

function UserForm({addUsers,submitted}) {

    const [id, setid] = useState();
    const [name, setname] = useState();
    useEffect(()=>{
            if(!submitted){
                setid(0);
                setname("");
            }
    },[submitted]);
    return (
        <div>
            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: "white",
                    marginBottom: "30px",
                    display: "block",
                }}
            >
                <Grid item xs={12}>
                    <Typography component={"h1"} sx={{ color: "#000000" }}>
                        User Form
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <Typography
                        component={"label"}
                        htmlFor="id"
                        sx={{
                            color: "#000000",
                            marginRight: "20px",
                            fontSize: "16px",
                            width: "100px",
                            display: "block"
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
                        onChange={(e) => {setid(e.target.value) }}
                    />
                </Grid>

                <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                    <Typography
                        component={"label"}
                        htmlFor="id"
                        sx={{
                            color: "#000000",
                            marginRight: "20px",
                            fontSize: "16px",
                            width: "100px",
                            display: "block"
                        }}
                    >
                        Name
                    </Typography>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        sx={{ width: "400px" }}
                        value={name}
                        onChange={(e) => {setname(e.target.value) }}
                    />
                </Grid>
                <Button sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: "#000000",
                    marginLeft: '50px',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: '#00c6e6',
                        opacity: 0.7
                    }
                }}
                onClick={()=>{addUsers({id:id,name:name})}}
                >Add</Button>

                </Grid>
        </div>
    );
}

export default UserForm;
