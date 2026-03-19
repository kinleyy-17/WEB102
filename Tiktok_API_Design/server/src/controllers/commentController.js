const dataStore = require('../models');

// GET all comments
const getAllComments = (req, res) => {
    res.status(200).json(dataStore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
    const commentId = parseInt(req.params.id);

    if (isNaN(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const comment = dataStore.comments.find(c => c.id === commentId);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    res.status(200).json(comment);
};

// POST create a comment
const createComment = (req, res) => {
    const { userId, videoId, text } = req.body;

    if (!userId || !videoId || !text) {
        return res.status(400).json({ error: 'Required fields missing' });
    }

    const userIdInt = parseInt(userId);
    const videoIdInt = parseInt(videoId);

    const userExists = dataStore.users.find(u => u.id === userIdInt);
    const videoExists = dataStore.videos.find(v => v.id === videoIdInt);

    if (!userExists) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (!videoExists) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const newComment = {
        id: dataStore.nextIds.comments++,
        userId: userIdInt,
        videoId: videoIdInt,
        text,
        createdAt: new Date().toISOString(),
        updatedAt: null
    };

    dataStore.comments.push(newComment);

    res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);

    if (isNaN(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required to update comment' });
    }

    dataStore.comments[commentIndex].text = text;
    dataStore.comments[commentIndex].updatedAt = new Date().toISOString();

    res.status(200).json(dataStore.comments[commentIndex]);
};

// DELETE a comment
const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);

    if (isNaN(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);

    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    dataStore.comments.splice(commentIndex, 1);

    res.status(204).end();
};

// GET comments for a video
const getCommentsByVideo = (req, res) => {
    const videoId = parseInt(req.params.videoId);

    if (isNaN(videoId)) {
        return res.status(400).json({ error: 'Invalid video ID' });
    }

    const videoExists = dataStore.videos.find(v => v.id === videoId);

    if (!videoExists) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const comments = dataStore.comments.filter(c => c.videoId === videoId);

    res.status(200).json(comments);
};

// GET comments by a user
const getCommentsByUser = (req, res) => {
    const userId = parseInt(req.params.userId);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    const userExists = dataStore.users.find(u => u.id === userId);

    if (!userExists) {
        return res.status(404).json({ error: 'User not found' });
    }

    const comments = dataStore.comments.filter(c => c.userId === userId);

    res.status(200).json(comments);
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
    getCommentsByVideo,
    getCommentsByUser
};