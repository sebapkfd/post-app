const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors())
app.use(express.json())

app.post('/post', async(req, res) => {
    //also should return added post
    // Fix route
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

app.get('/get', async(req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM post");
        res.json(rows)
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
})

app.delete('/delete', async(req, res) => {
    try {
        const { id } = req.body;
        const deletedPost = await pool.query("DELETE FROM post WHERE id = $1", [id]);
        res.json('Post deleted')
    } catch (error) {
        console.log(error);
    }
})


app.listen(5000, () => {
    console.log('Listen in 5000');
})