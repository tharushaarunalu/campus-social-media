const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController'); // Import post controller
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication

// GET: Render Create Post Page
router.get('/create', authMiddleware, postController.renderCreatePostPage);

// POST: Create a new post
router.post('/create', authMiddleware, postController.createPost);

// GET: Fetch all posts
router.get('/', authMiddleware, postController.getAllPosts);

// GET: Fetch a single post by ID
router.get('/:id', authMiddleware, postController.getPostById);

// PUT: Update a post by ID
router.put('/:id', authMiddleware, postController.updatePost);

// DELETE: Delete a post by ID
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
