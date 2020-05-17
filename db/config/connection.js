var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Kirby411',
  database : 'burgers_db'
});
 
connection.connect();
 
module.exports = connection;
