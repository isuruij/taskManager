const express = require("express");
require("./db/mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./router");
const port = 3005;  
const host = '0.0.0.0';
  
const app = express();         
 
app.use(cors());  
app.use(bodyParser.json());
app.use(userRouter) 

 
app.listen(port,host, () => {
    console.log("Server is up and running on port " + port);
  });

  



