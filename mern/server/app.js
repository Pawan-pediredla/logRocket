const express  =  require("express");
const connectdb = require("../db/db");
const routes = require("../routes/api/books");
const app =express()
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/books", routes);
connectdb()
app.get('/',(res,req)=>{
    res.send("hello world")
})

const port  =  process.env.PORT ||8081;
app.listen(port,()=>console.log(`${port}`))