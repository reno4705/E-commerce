require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router")

app.use(express.json());
app.use(cookieParser(""));
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
}
app.use(cors(corsOptions));
app.use(router)

const port = 8080;

app.listen(port,()=> {
    console.log(`server is running on port number ${port}`)
});

DefaultData();