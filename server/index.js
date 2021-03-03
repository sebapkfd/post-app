const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors())
app.use(express.json())

app.post('/post', async(req, res) => {
    try {
        const { name, description } = req.body ;
        const newPost = await pool.query(
            "INSERT INTO post (name, description) VALUES ($1, $2) ",
            [name, description]
        );
        res.json(newPost);
        console.log(description);
    } catch (error) {
        console.log(error.message);
    }
})


app.listen(5000, () => {
    console.log('Listen in 5000');
})