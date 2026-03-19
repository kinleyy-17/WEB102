const data = require('../utils/mockData');

exports.getPosts = (req, res) => {
  res.status(200).json({ success: true, data: data.posts });
};

exports.getPost = (req, res) => {
  const post = data.posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ success: false });
  res.status(200).json({ success: true, data: post });
};

exports.createPost = (req, res) => {
  const newPost = { id: data.posts.length + 1, ...req.body };
  data.posts.push(newPost);
  res.status(201).json({ success: true, data: newPost });
};

exports.updatePost = (req, res) => {
  const post = data.posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ success: false });

  Object.assign(post, req.body);
  res.status(200).json({ success: true, data: post });
};

exports.deletePost = (req, res) => {
  const index = data.posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ success: false });

  data.posts.splice(index, 1);
  res.status(200).json({ success: true });
};