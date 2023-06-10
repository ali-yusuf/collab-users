const { Client } = require('pg');
const fs = require('fs');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "000786Yu#",
    database: "postgres"
})
let data = [];
const storageFilePath = './users.json';

client.connect();
client.query(`select * from test`, (err, res) => {
    if (!err) {
        console.log(res.rows)
        data = res.rows;
        console.log(data)
        saveUsersToFile()

    }
    client.end();
})

function saveUsersToFile() {
    fs.writeFile(storageFilePath, JSON.stringify(data), (err) => {
        if (err) {
            console.error('Error saving user data:', err);
        }
    });
}


module.exports = client;
// Pg Admin mastr pwd  = 000786Ya#
// database postgres pwd = 000786Yu#