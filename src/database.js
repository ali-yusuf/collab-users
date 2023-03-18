const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "000786Yu#",
    database: "postgres"
})

module.exports = client;