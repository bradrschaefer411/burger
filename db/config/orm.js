var connection = require("./connection");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function () {
    connection.query(`INSERT INTO burgers (burger_name, devoured)
    VALUES  ('Chicken', FALSE);`, function (error, results, fields) {
      console.log(results)
    });
  },
  updateOne: function () {

  }
};
module.exports = orm

// orm.insertOne();
// orm.selectAll();
// orm.updateOne();

// selectAll()
// insertOne()
// updateOne()