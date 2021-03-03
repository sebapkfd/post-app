const pool = require('../db');

const getPosts = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM post");
        res.json(rows)
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

const postPost = async (req, res) => {
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
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedPost = await pool.query("DELETE FROM post WHERE id = $1", [id]);
        res.json('Post deleted')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getPosts,
    postPost,
    deletePost
};