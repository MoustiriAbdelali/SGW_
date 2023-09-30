const express = require("express");
///const Parser = require("body-parser");
//const bodyParser = require("body-parser");
const mysql=require("mysql2")
const app =express()
const port = 5000
// const db =require('./config/database');
// const modelexpor =require('./models/index')
const cors =require("cors")
app.use( bodyParser.urlencoded({extended:true}))
app.use( bodyParser.json())

app.use(cors())






///////////////////////CNX SQL//////////////////
const db2 = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_GSTS"
});





function dateheur (){
    const currentDate = new Date();

// Get the individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the date and time as a string
const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


return formattedDate

}


app.listen(port, () => { 
    console.log(`Server is running on port yes `);
  })

