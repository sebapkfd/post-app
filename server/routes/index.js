const express = require('express');
const router = express.Router();

const {getPosts, deletePost, postPost } = require('../controllers/postController');

router.get('/', getPosts)

router.post('/', postPost)

router.delete('/', deletePost)

module.exports = router;
