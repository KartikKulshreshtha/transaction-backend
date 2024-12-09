const mysql = require('mysql');

const connection = new mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'officetransaction',
    port: 3309
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = connection