const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparcer = require('body-parser');

app.use(bodyparcer.json)

var mysqlconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'website'
});

mysqlconnection.connect((err) => {
  if (!err)
    console.log("DB Connected Succeded.");
  else
    console.log('DB connection failed \n Error :' + JSON.stringify(err,undefined,2));
});

app.listen(5000,()=>console.log('Express server is running at port no: 5000'));
app.get('/project',(req,res)=>{
  mysqlconnection.query('SELECT * FROM project',(err,rows,fields)=>{
    if(!err){
    console.log('Successful query');
    console.log(rows);
  }
    else
    console.log(err);
  })

});