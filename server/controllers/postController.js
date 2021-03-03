const pool = require('../db');

const listPost = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM post");
        res.json(rows)
    } catch (error) {
        console.log(error);
    }
}

const createPost = async (req, res) => {
    try {
        const { name, description } = req.body ;
        const newPost = await pool.query(
            "INSERT INTO post (name, description) VALUES ($1, $2) RETURNING *",
            [name, description]
        );
        res.json(newPost.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedPost = await pool.query("DELETE FROM post WHERE id = $1 RETURNING *", [id]);
        res.json(deletedPost.rows[0]);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    listPost,
    createPost,
    deletePost
};