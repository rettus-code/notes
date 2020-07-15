// Dependencies
const express = require("express");
const fs= require("fs");
//const path = require("path");
//const util = require("util");
//const newDB = new DB();


let app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/dbRoutes"))
app.use(require("./routes/htmlRoutes"))

app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
})