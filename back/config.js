
var mysql      = require('mysql');
var connection = mysql.createConnection({
  port : 3307 ,
  host     : "localhost",
  user     : "root",
  password : "",
  database : "carwash"
});
connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;