const express = require('express');
const router = express.Router();

const { listPost, deletePost, createPost } = require('../controllers/postController');

router.get('/', listPost)

router.post('/', createPost)

router.delete('/', deletePost)

module.exports = router;
