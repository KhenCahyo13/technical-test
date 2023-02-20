const mysql = require('mysql2')

const Database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "technical_test"
})

Database.getConnection((error, connection) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Database berhasil terhubung")
    }
})

module.exports = Database.promise()