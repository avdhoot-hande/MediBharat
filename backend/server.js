const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'SAsa@3305',
  database: 'medibharat'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ', err);
  } else {
    console.log('Connected to MySQL!');
    connection.end();
  }
});
