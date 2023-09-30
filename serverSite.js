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

