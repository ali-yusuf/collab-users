const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "000786Yu#",
    database: "postgres"
})

// client.connect();
// client.query(`select * from test`, (err, res) => {
//     if (!err) {
//         console.log(res.rows)
//     }
//     client.end();
// })

module.exports = client;