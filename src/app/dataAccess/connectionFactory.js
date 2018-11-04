var mysql = require('mysql');

const createDBConnection = () => {
    return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}

module.exports = () => {
    return createDBConnection;
}
