const express = require("express");

 console.log("1")
const Parser = require("body-parser");
 console.log("2")
const bodyParser = require("body-parser");
 console.log("3")
const mysql=require("mysql2")
 console.log("4")
const app =express()
 console.log("5")
const port =5000
 console.log("6")

const cors =require("cors")
 console.log("7")
app.use( bodyParser.urlencoded({extended:true}))
 console.log("8")
app.use( bodyParser.json())
 console.log("9")

app.use(cors())

 console.log("10")




///////////////////////CNX SQL//////////////////
const db2 = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_GSTS"
});


app.post("/login", (req, res) => {
    const sql = "SELECT  Clients.Host,Clients.bdd,Clients.UserName,Clients.passeword ,Tokens.id from Clients ,Tokens WHERE token=? and Tokens.IDClient=Clients.IDClient;";
    db2.query(sql, [req.headers.authorization],(err,data_)=>{
        const db3 = mysql.createConnection({
            host: data_[0].Host ,
            user: data_[0].UserName,
            password: data_[0].passeword,
            database: data_[0].bdd
          });
          const sql_ = "SELECT  Cuve.cuve_id FROM `Cuve` WHERE IDTokens=?";
          db3.query(sql_, [data_[0].id],(err_,data__)=>{


        console.log("-----------------------------------------------------------------------------------",req.body.volt);

            const sqlInser="INSERT INTO `Mesur`( `date`, `Level`, `CuveCuveId`, `AlarmeLevel`, `AlarmeBattery`, `Volt`, `Rsrp`) VALUES (?,?,?,?,?,?,?)"
            db3.query(sqlInser,[dateheur(),req.body.height  ,data__[0].cuve_id  ,req.body.empty_alarm,  req.body.battery_alarm  ,req.body.volt ,req.body.rsrp] ,(err___,date_____)=>{
            
            })






     } )
          });
          

return res.json("okk");
    });
  

app.listen(port, () => { 
    console.log(`Server is running on port yes `);
  })


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
