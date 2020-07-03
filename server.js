// Dependencies
var express = require("express");


//temp db connection dependency
var mysql = require('mysql');
//import the secret mysql vars


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.get('/', function(request,response){
  console.log('made request on the index page, sending connection to sql database');
  var connection  =  mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    database: 'burgers_db',
    user:'root',
  password : 'Kirby411',

  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });
  var sql = "select * from burgers;";
  connection.query(sql, function(err,rows){
    if (err) throw err;
    console.log('pulling from the table now.');
    console.log(rows);
  });
});







app.listen('3000', function() {
    // Log (server-side) when our server has started
    console.log("Server rocking with localhost and port 3000"); //+ PORT);
  });
  