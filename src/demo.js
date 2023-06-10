//const { json } = require('express');
//var http = require('http');
//const { data } = require('jquery');
// const client = require('./database');
//const data = require('./data');


// const data = [{ Id: "1", name: "Ramu", email: "test.com", password: "2020" }, { Id: "2", name: "Ramu", email: "test.com" }, { Id: "3", name: "Ramu", emai: "test.com", password: "2020" }, { Id: "4", name: "Ramu", email: "test.com", password: "3030" }] // we can take array of object
// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'json' })
//         //res.write('{"Name": "Ram"}') //for single value
//     res.write(JSON.stringify(data)); // for object with multiple attributes , it is body
//     res.end();
// }).listen(2000);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { Pool } = require('pg');
//const axios = require('axios');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '000786Yu#',
    port: 5432 // or the port used by your PostgreSQL server
});

const app = express();
var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a user
app.post('/register', async(req, res) => {
    try {
        const { Id, name, email, password } = req.body;
        //console.log(Id)
        const query = 'INSERT INTO test VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [Id, name, email, password];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all users
app.get('/users', async(req, res) => {
    try {
        const query = 'SELECT * FROM test';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a user by ID
app.get('/users/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const query = 'SELECT * FROM users WHERE id = $1';
        const result = await pool.query(query, [userId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a user by ID
// Create a user
// app.post('/users', async(req, res) => {
//     try {
//         const { name, email, age } = req.body;
//         const query = 'INSERT INTO test (Id, name, email) VALUES ($1, $2, $3) RETURNING *';
//         const values = [name, email, age];
//         const result = await pool.query(query, values);
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Get all users
app.get('/users', async(req, res) => {
    try {
        const query = 'SELECT * FROM test';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a user by ID
app.get('/users/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const query = 'SELECT * FROM test WHERE id = $1';
        const result = await pool.query(query, [userId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a user by ID
app.put('/users/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, age } = req.body;
        const query = 'UPDATE test SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *';
        const values = [name, email, age, userId];
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a user by ID
app.delete('/users/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const query = 'DELETE FROM test WHERE id = $1';
        await pool.query(query, [userId]);
        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
const port = 2000; // Replace with your desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});