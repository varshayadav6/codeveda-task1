const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = []; // example array

// POST create user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('User added');
});

// GET all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// PUT update user by id (example for user id = index)
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.send('User updated');
});

// DELETE user by id
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.send('User deleted');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
