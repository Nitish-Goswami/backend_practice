const express = require("express");
const hbs = require("hbs");
const mysql = require('mysql');
const routes = require("./routes/main");
const connection = require("./dbconn");

connection.connect();

//   connection.query("INSERT INTO `test` (`id`, `name`, `is_vaccinated`, `birthdate`, `gender`) VALUES (NULL, 'Nitish Kumar', '1', '2022-11-23', 'Male');", (err, rows, fields) => {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0])
//   })
  
//   connection.end()

const app = express();

app.use(express.urlencoded({
    extended: true
  }))

app.use('/',routes);

// View Engine
app.set("view engine","hbs");
app.set("views","views");

app.listen(process.env.PORT | 5500,()=>{
    console.log("App is running on port "+process.env.PORT);
});

// INSERT INTO `test` (`id`, `name`, `is_vaccinated`, `birthdate`, `gender`) VALUES (NULL, 'Nitish Kumar', '1', '2022-11-23', 'Male');