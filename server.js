
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/product", require("./Routes/product"));

const connect_db = require("./connect_db");
connect_db();



// Start the server on the port defined in the .env file
// Log an error if one occurs, otherwise confirm the server is running
app.listen(process.env.PORT, (err) => 
  err ? console.log(err) : console.log("server is running ")
);
