const data = require('../utils/mockData');

exports.getComments = (req, res) => {
  res.status(200).json({ success: true, data: data.comments });
};

exports.getComment = (req, res) => {
  const comment = data.comments.find(c => c.id == req.params.id);
  if (!comment) return res.status(404).json({ success: false });
  res.status(200).json({ success: true, data: comment });
};

exports.createComment = (req, res) => {
  const newComment = { id: data.comments.length + 1, ...req.body };
  data.comments.push(newComment);
  res.status(201).json({ success: true, data: newComment });
};

exports.updateComment = (req, res) => {
  const comment = data.comments.find(c => c.id == req.params.id);
  if (!comment) return res.status(404).json({ success: false });

  Object.assign(comment, req.body);
  res.status(200).json({ success: true, data: comment });
};

exports.deleteComment = (req, res) => {
  const index = data.comments.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ success: false });

  data.comments.splice(index, 1);
  res.status(200).json({ success: true });
};