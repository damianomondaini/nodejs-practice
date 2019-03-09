let mysql = require('mysql');
let db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'livre-or'
});
 
db.connect();

module.exports = db