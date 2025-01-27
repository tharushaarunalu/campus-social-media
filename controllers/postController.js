const Post = require('../models/postModel');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Upload destination directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Unique filename
    },
});

// Fetch all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
        res.render('posts', { posts, user: req.user });
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).send('Server error');
    }
};

// Render Create Post Page
exports.renderCreatePostPage = (req, res) => {
    try {
        res.render('createPost', { user: req.user });
    } catch (err) {
        console.error('Error rendering Create Post page:', err);
        res.status(500).send('Server error');
    }
};

// Handle Post Creation
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        let media = null;
        let mediaType = null;

        if (req.file) {
            media = req.file.filename;
            mediaType = req.file.mimetype;
        }

        if (!title || !content) {
            return res.status(400).send('Title and content are required');
        }

        const post = new Post({
            title,
            content,
            media,
            mediaType,
            author: req.user._id,
        });

        await post.save();

        // Redirect to home page to display all posts
        res.redirect('/');
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).send('Server error');
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'name');
        if (!post) return res.status(404).send('Post not found');
        res.render('postDetail', { post, user: req.user });
    } catch (err) {
        console.error('Error fetching post:', err);
        res.status(500).send('Server error');
    }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).send('Title and content are required');
        }

        const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!post) return res.status(404).send('Post not found');

        res.redirect('/posts');
    } catch (err) {
        console.error('Error updating post:', err);
        res.status(500).send('Server error');
    }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).send('Post not found');

        res.redirect('/posts');
    } catch (err) {
        console.error('Error deleting post:', err);
        res.status(500).send('Server error');
    }
};
