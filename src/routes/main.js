const express = require("express");
const routes = express.Router();
const mysql = require('mysql');

const connection = require("../dbconn");

routes.get("/all",(req,res)=>{
    let rowsOfRecords;
    connection.query("SELECT * FROM test", (err, rows, fields) => {
        if (err) throw err
        res.status(200).json({
            success: true,
            rows
          });
      })
      
})

routes.get("/",(req,res)=>{
    
    res.render("index");
})

routes.post("/vote",(req,res)=>{
    const name = req.body.name;
    const gender = req.body.gender;
    const dob = req.body.DOB;
    const isVaccinated = req.body.isVaccinated;

    connection.query("INSERT INTO `test` (`id`, `name`, `is_vaccinated`, `birthdate`, `gender`) VALUES (NULL, '"+name+"', "+isVaccinated+", '"+dob+"', '"+gender+"');", (err, rows, fields) => {
        if (err) throw err
      
        console.log('The solution is: ', rows[0])
      })
    
    

    console.log("request recived");
    res.send(req.body);
})

module.exports = routes;