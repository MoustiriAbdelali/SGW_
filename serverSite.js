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





